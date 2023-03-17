import React, {useState} from 'react';
import styles from '../../styles/FavoritesItem.module.css';

interface FavoritesItemProps {
  image: string;
  name: string;
  description: string;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}



const FavoritesItem: React.FC<FavoritesItemProps> = ({ image, name, description, isFavorite, onFavoriteClick }) => {
  // const [isFavorite, setIsFavorite] = useState(true);

  const handleFavoriteClick = () => {
    onFavoriteClick();
  };

  return (
    <div className={styles.FavoritesItem}>
      <div className={styles.favorite} onClick={handleFavoriteClick}>
        {isFavorite ?  <span>★</span> : <span>☆</span> }
      </div>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FavoritesItem;