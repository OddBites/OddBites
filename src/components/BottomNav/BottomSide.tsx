import React from 'react';
import PopularRestaurants from './PopularRestaurants';
import RarestEats from './RarestEats';
import Favorites from './Favorites';
import styles from '../../styles/bottomSide.module.css';

const BottomSide: React.FC = () => {
  const popularRestaurants = <PopularRestaurants />;
  const rarestEats = <RarestEats />;
  const favorites = <Favorites />;

  return (
    <div className={styles.container}>
      {popularRestaurants && (
        <div className={styles.popularRestaurants}>
          <div className={styles.title}> Popular Restaurants</div>
          {popularRestaurants}
        </div>
      )}
      {rarestEats && (
        <div className={styles.rarestEats}>
          <div className={styles.title}> Rarest Eats</div>
          {rarestEats}
        </div>
      )}
      {favorites && (
        <div className={styles.favoritesScroll}>
          <div className={styles.title}>Favorites</div>
          {favorites}
        </div>
      )}
    </div>
  );
};

export default BottomSide;