import React from 'react';

import styles from '../../styles/restaurantDetails.module.css';
import MenuItem from './MenuItem';
import UserReview from './UserReview';

// TODO: type 'r'
const RestaurantDetails = ({ r }) => {
  return (
    <div className={styles.split}>
      <div className={styles.left}>
        <h3>Items</h3>
        {
          r.menu.map((item) => (
            <MenuItem item={item} />
          ))
        }
      </div>
      <div className={styles.right}>
        <h3>Reviews</h3>
        {
          r.reviews.map((review) => (
            <UserReview review={review} />
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantDetails;