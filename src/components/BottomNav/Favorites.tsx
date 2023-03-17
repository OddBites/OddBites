
import React, { useEffect, useState } from 'react';
import FavoritesItem from './FavoritesItem';
import styles from '../../styles/Favorites.module.css';
import { MenuItem } from '@/pages/api/menuItems';
import { async } from '@firebase/util';

// const food = [
//     {
//       name: "Food 1",
//       description: "Description 1",
//       image: "https://via.placeholder.com/300x200.png?text=Food+1",
//     },
//     {
//       name: "Food 2",
//       description: "Description 2",
//       image: "https://via.placeholder.com/300x200.png?text=Food+2",
//     },
//     {
//       name: "Food 3",
//       description: "Description 3",
//       image: "https://via.placeholder.com/300x200.png?text=Food+3",
//     },
//     {
//       name: "Food 4",
//       description: "Description 4",
//       image: "https://via.placeholder.com/300x200.png?text=Food+4",
//     },
//     {
//       name: "Food 5",
//       description: "Description 5",
//       image: "https://via.placeholder.com/300x200.png?text=Food+4",
//     },
//     {
//       name: "Food 6",
//       description: "Description 6",
//       image: "https://via.placeholder.com/300x200.png?text=Food+5",
//     }
//   ];
  

  const Favorites: React.FC = () => {
    const [food, setfood] = useState<MenuItem[]>([]);
    useEffect(() => {
      async function fetchData() {
        try{
          const res = await fetch('/api/menu');
          const data = await res.json();
          // const favoriteItems = data.filter((item: MenuItem) => item.isFavorite);
          setfood(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    }, []);

    const handleFavoriteClick = (id: string) => {
      const updatedFood = food.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        }
        return item;
      });
      setfood(updatedFood);
    };
  

    return (
      <div className={styles.FavoritesList}>
        {food.map((item) => (
          <FavoritesItem 
          key={item.id} 
          image={item.src} 
          name={item.name} 
          description={item.description}
          isFavorite = {item.isFavorite}
          onFavoriteClick = {() => handleFavoriteClick(item.id)} />
        ))}
      </div>
    );
  };
  
  export default Favorites;

