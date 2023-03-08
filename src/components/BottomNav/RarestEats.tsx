import React, { useEffect, useState } from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../../styles/RarestEats.module.css';
import { MenuItem } from '@/pages/api/menuItems';
import FoodPanel from './FoodPanel';

const food = [
  {
    name: 'Pizza Margherita',
    description: "description", 
    src: "https://via.placeholder.com/300x200.png?text=Restaurant+6",
    id: '1'
  },
  {
    name: 'Banh Mi Sandwich',
    description: "description",
    src: "https://via.placeholder.com/300x200.png?text=Restaurant+6",
    id: '2'
  },
  {
    name: 'Sushi Platter',
    description: "description",
    src: "https://via.placeholder.com/300x200.png?text=Restaurant+6",
    id: '3'
  },
  {
    name: 'Steak Frites',
    description: "description",
    src: "https://via.placeholder.com/300x200.png?text=Restaurant+6",
    id: '4'
  }
];

const RarestEats: React.FC = () => {
  // const [food, setfood] = useState<MenuItem[]>([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch('/api/menu');
  //       const data = await res.json();
  //       setfood(data);
  //     } catch (error) {
  //       console.error(error);
  //     }

  //   }
  //   fetchData();
  // }, []);


  return (
    <div className={styles.foodGrid}>
      {food.map((food) => (
        <FoodPanel
          key={food.name}
          name={food.name}
          description={food.description}
          image={food.src}
          // nutrition = {food.nutrition}
          id={food.id}
        />
      ))}
    </div>
  );
};

export default RarestEats;