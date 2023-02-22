import React from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../styles/popularEats.module.css';

const restaurants = [
  {
    name: "Restaurant 1",
    description: "Description 1",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+1",
  },
  {
    name: "Restaurant 2",
    description: "Description 2",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+2",
  },
  {
    name: "Restaurant 3",
    description: "Description 3",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+3",
  },
  {
    name: "Restaurant 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
  },
];

const PopularEats: React.FC = () => {
  return (
    <div className={styles.popularEats}>
      <div className={styles.title}>Popular Eats</div>
      <div className={styles.restaurantGrid}>
        {restaurants.map((restaurant) => (
          <RestaurantPanel
            key={restaurant.name}
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