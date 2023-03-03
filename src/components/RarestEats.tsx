import React from 'react';
import FoodPanel from './FoodPanel';
import styles from '../styles/RarestEats.module.css';

const food = [
  {
    name: "Food 1",
    description: "Description 1",
    image: "https://via.placeholder.com/300x200.png?text=Food+1",
    nutrition: "30",
  },
  {
    name: "Food 2",
    description: "Description 2",
    image: "https://via.placeholder.com/300x200.png?text=Food+2",
    nutrition: "60",
  }
];

const RarestEats: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.restaurantGrid}>
        {food.map((food) => (
          <FoodPanel
            key={food.name}
            name={food.name}
            description={food.description}
            image={food.image}
            nutrition={food.nutrition}
          />
        ))}
      </div>
    </div>
  );
};

export default RarestEats;