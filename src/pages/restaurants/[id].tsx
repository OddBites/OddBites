import Header from '@/components/header';
import LeftSide from '@/components/restaurant/LeftSide';
import Banner from '@/components/restaurant/Banner';
import RestaurantDetails from '@/components/restaurant/RestaurantDetails';
import { MenuItem, Restaurant, Review } from '@/types/Restaurant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import styles from '../../styles/restaurant.module.css';

const Restaurant = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query)

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menu, setMenu] = useState<MenuItem[]>();
  const [reviews, setReviews] = useState<Review[]>();
  useEffect(() => {
    async function fetchData() {
      if (router.query && router.query.id) {
        try {
          const r_res = fetch(`/api/restaurants?id=${id}`);
          const m_res = fetch(`/api/menuItems?restaurantId=${id}`);
          const u_res = fetch(`/api/reviews?restaurantId=${id}`);
          const r_data = await (await r_res).json();
          const m_data = await (await m_res).json();
          const u_data = await (await u_res).json();
          setRestaurant(r_data);
          setMenu(m_data);
          setReviews(u_data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [router.query.id]);


  if (restaurant && menu && reviews)
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
          <Banner r={restaurant} />
        </div>
        <div className={styles.bottomSide}>
          <RestaurantDetails r={restaurant} m={menu} u={reviews} />
        </div>
      </div>
    </div>
  )

  if (!restaurant || !menu || !reviews)
  return (<div>Loading...</div>)
}

export default Restaurant;