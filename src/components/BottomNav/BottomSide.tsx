import React from 'react';
import PopularRestaurants from './PopularRestaurants';
import RarestEats from './RarestEats';
import Favorites from './Favorites';
import styles from '../../styles/bottomSide.module.css';

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
            <div className={styles.favoritesScroll}>
            <div className={styles.title}>Favorites</div>
        <Favorites />
            </div>
        </div>
    );
};

export default BottomSide;