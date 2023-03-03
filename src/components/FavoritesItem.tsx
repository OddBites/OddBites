import React from 'react';
import styles from '../styles/FavoritesItem.module.css';

interface FavoritesItemProps {
  image: string;
  name: string;
  description: string;
}

const FavoritesItem: React.FC<FavoritesItemProps> = ({ image, name, description }) => {
  return (
    <div className={styles.FavoritesItem}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FavoritesItem;