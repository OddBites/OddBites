import React from 'react';
import Header from '../components/header';
import Column from '../components/column';
import PopularRestaurants from '../components/PopularRestaurants';
import GoogleMap from '../components/GMap';
import styles from '../styles/restaurants.module.css';
import BottomSide from '@/components/BottomSide';

const Restaurants: React.FC = () => {
  return (
    <div>
      <div className={styles.body}>
         <div className={styles.header}>
            <Header />
      </div>
         <div className={styles.leftSide}>
            <Column />
         </div>
         <div className={styles.topSide}>
            <GMap />
         </div>
         <div className={styles.bottomSide}>
            <BottomSide />
         </div>
      </div>
    </div>
  );
};

export default Restaurants;