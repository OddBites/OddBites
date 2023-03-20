import React from 'react';

import styles from '../../styles/restaurantDetails.module.css';
import MenuItem from './MenuItem';
import UserReview from './UserReview';

const RestaurantDetails = ({ r, m, u }:any) => {
  return (
    <div className={styles.split}>
      <div className={styles.left}>
        <h3>Items</h3>
        {
          m.map((item:any) => (
            <MenuItem key={item.id} item={item} />
          ))
        }
      </div>
      <div className={styles.right}>
        <h3>Reviews</h3>
        {
          u.map((review:any) => (
            <UserReview key={review.id} review={review} />
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantDetails;