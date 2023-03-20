import { Timestamp } from 'firebase/firestore';
import React from 'react';

import styles from '../../styles/userReview.module.css';

const UserReview = ({ review }:any) => {
  let date = (new Timestamp(review.date.seconds, review.date.nanoseconds)).toDate().toDateString();

  return (
    <div className={styles.itemContainer}>
      <div className={styles.avatarArea}>
        <img src={review.src} alt="Profile Image" />
      </div>
      <div className={styles.reviewBody}>
        <div className={styles.author}>{review.name}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.rating}>{review.rating} stars</div>
        <div className={styles.content}>{review.content}</div>
      </div>
    </div>
  )
}

export default UserReview;