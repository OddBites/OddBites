import Header from '@/components/header';
import LeftSide from '@/components/restaurant/LeftSide';
import MapView from '@/components/restaurant/MapView';
import RestaurantDetails from '@/components/restaurant/RestaurantDetails';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../styles/restaurant.module.css';

const restaurant = {
  name: "McDonald's",
  address: "45 Jay Scutti Blvd, Rochester, NY 14623",
  description: "McDonald's is a fast food restaurant chain that was founded in 1940 in San Bernardino, California. It has since grown to become one of the largest and most recognizable brands in the world, with over 39,000 locations in more than 100 countries."
};

const Restaurant = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.leftSide}>
          <LeftSide r={restaurant} />
        </div>
        <div className={styles.topSide}>
          <MapView r={restaurant} />
        </div>
        <div className={styles.bottomSide}>
          <RestaurantDetails r={restaurant} />
        </div>
      </div>
    </div>
  )
}

export default Restaurant;