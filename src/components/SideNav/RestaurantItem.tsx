import React, { useState } from 'react';
import styles from '../../styles/RestaurantItem.module.css';

interface RestaurantItemProps {
  src: string;
  name: string;
  description: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ src, name, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.RestaurantItem}>
      <div className={styles.favorite} onClick={handleFavoriteClick}>
        {isFavorite ? <span >★</span> : <span>☆</span>}
      </div>
      <img src={src} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default RestaurantItem;