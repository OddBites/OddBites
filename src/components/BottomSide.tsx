import React from 'react';
import PopularRestaurants from './PopularRestaurants';
import RarestEats from './RarestEats';
// import FavoritesScroll from './FavoritesScroll';
import styles from '../styles/bottomSide.module.css';

const BottomSide: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.popularRestaurants}>
                <div className={styles.title}> Popular Restaurants</div>
                <PopularRestaurants />
            </div>
            <div className={styles.rarestEats}>
                <div className={styles.title}> Rarest Eats</div>
                <RarestEats />
            </div>
            {/* <div className={styles.favoritesScroll}>
        <FavoritesScroll />
      </div> */}
        </div>
    );
};

export default BottomSide;