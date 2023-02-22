import React from 'react';
import styles from '../styles/restaurantPanel.module.css';

interface Props {
  name: string;
  description: string;
  image: string;
}

const RestaurantPanel: React.FC<Props> = ({ name, description, image }) => {
  return (
    <div className={styles.restaurantPanel}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.description}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RestaurantPanel;