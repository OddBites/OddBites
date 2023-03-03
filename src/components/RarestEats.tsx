import React from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../styles/RarestEats.module.css';

const food = [
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
  {
    name: "Restaurant 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
  },
  {
    name: "Restaurant 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
  },
  {
    name: "Restaurant 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
  },
  {
    name: "Restaurant 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
  },
  {
    name: "Restaurant 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
  },
];

const RarestEats: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.restaurantGrid}>
        {food.map((food) => (
          <RestaurantPanel
            key={food.name}
            name={food.name}
            description={food.description}
            image={food.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RarestEats;