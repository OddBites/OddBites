import React, { useEffect, useState } from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../styles/RarestEats.module.css';
import { MenuItem } from '@/pages/api/menuItem';

// const food = [
//   {
//     name: "Food 1",
//     description: "Description 1",
//     image: "https://via.placeholder.com/300x200.png?text=Food+1",
//   },
//   {
//     name: "Food 2",
//     description: "Description 2",
//     image: "https://via.placeholder.com/300x200.png?text=Food+2",
//   },
//   {
//     name: "Food 3",
//     description: "Description 3",
//     image: "https://via.placeholder.com/300x200.png?text=Food+3",
//   },
//   {
//     name: "Food 4",
//     description: "Description 4",
//     image: "https://via.placeholder.com/300x200.png?text=Food+4",
//   },
//   {
//     name: "Food 5",
//     description: "Description 5",
//     image: "https://via.placeholder.com/300x200.png?text=Food+4",
//   },
//   {
//     name: "Food 6",
//     description: "Description 6",
//     image: "https://via.placeholder.com/300x200.png?text=Food+5",
//   }
// ];

//const RarestEats: React.FC = () => {
  const RarestEats: React.FC = () => {
    const [food, setfood] = useState<MenuItem[]>([]);
    useEffect(() =>{
      async function fetchData() {
        try{
          const res = await fetch('/api/menu');
          const data = await res.json();
          setfood(data);
        } catch(error){
          console.error(error);
        }
        
      }
      fetchData();
    }, []);


  return (
    <div className={styles.container}>
      <div className={styles.restaurantGrid}>
        {food.map((food) => (
          <RestaurantPanel
            key={food.name}
            name={food.name}
            description={food.description}
            image={food.src}
          />
        ))}
      </div>
    </div>
  );
};

export default RarestEats;