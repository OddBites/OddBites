import React from 'react';
import Header from '../components/header';
import Column from '../components/SideNav/column';
import PopularRestaurants from '../components/BottomNav/PopularRestaurants';
import GMap from '../components/TopNav/GMap';
import styles from '../styles/restaurants.module.css';
import BottomSide from '@/components/BottomNav/BottomSide';

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