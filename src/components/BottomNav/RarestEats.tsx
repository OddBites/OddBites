import React, { useEffect, useState } from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../../styles/RarestEats.module.css';
import { MenuItem } from '@/pages/api/menuItem';


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