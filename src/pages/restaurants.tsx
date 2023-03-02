import React from 'react';
import Header from '../components/header';
import Column from '../components/column';
import PopularEats from '../components/popularEats';
import GoogleMap from '../components/GoogleMap';
import styles from '../styles/restaurants.module.css';

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
            <GoogleMap />
         </div>
         <div className={styles.bottomSide}>
            <PopularEats />
         </div>

      </div>
    </div>
  );
};

export default Restaurants;