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
  ],
  slides: [
    { id: 0, src: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/nvrw3QS6dVzaqOpBVNf1vUFTdZQ=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/TL3H5R425ZBSFK32UYDI2F62LA.jpg" },
    { id: 1, src: "https://s41230.pcdn.co/wp-content/uploads/2021/12/McDonalds-Net-Zero-restaurant-HEADER.jpg" },
    { id: 2, src: "https://mcdonaldsblog.in/wp-content/uploads/2016/04/McDonalds_Restaurant.jpg" },
    { id: 3, src: "https://www.gannett-cdn.com/media/USATODAY/USATODAY/2014/04/24//1398348071002-ronald042414-003.jpg?width=592&format=pjpg&auto=webp&quality=70" }
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