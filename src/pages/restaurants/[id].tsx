import Header from '@/components/header';
import LeftSide from '@/components/restaurant/LeftSide';
import MapView from '@/components/restaurant/MapView';
import RestaurantDetails from '@/components/restaurant/RestaurantDetails';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../styles/restaurant.module.css';

const restaurant = {
  id: 0,
  name: "McDonald's",
  address: "45 Jay Scutti Blvd, Rochester, NY 14623",
  description: "McDonald's is a fast food restaurant chain that was founded in 1940 in San Bernardino, California. It has since grown to become one of the largest and most recognizable brands in the world, with over 39,000 locations in more than 100 countries.",
  menu: [
    { id: 0, name: "McRib", kcal: 500, description: "A barbecue-flavored pork sandwich periodically sold by the international fast food restaurant chain McDonald's. It was first introduced to the McDonald's menu in 1981, following test marketing the year before." },
    { id: 1, name: "Shamrock Shake", kcal: 460, description: "A seasonal green mint flavored milkshake dessert sold at some McDonald's restaurants during March to celebrate St. Patrick's Day in the US, Canada and Ireland." }
  ],
  reviews: [
    { id: 0, author: "Patty Schwab", rating: 4.5, content: "Man I love McDonal!" },
    { id: 1, author: "Hanabi", rating: 2, content: "I can get better burgers at Walmart for half the price." },
    { id: 2, author: "佐藤田中", rating: 3.5, content: "Shammy Shakeは美味しい!" }
  ]
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