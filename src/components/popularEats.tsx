import React, { useEffect, useState } from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../styles/popularEats.module.css';

interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
}

const PopularEats: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async() => {
      try {
        const res = await fetch('/api/restaurant');
        const data = await res.json();
        setRestaurants(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchRestaurants()
  }, []);

  return (
    <div className={styles.popularEats}>
      <div className={styles.title}>Popular Eats</div>
      <div className={styles.restaurantGrid}>
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantPanel
            key={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularEats;
