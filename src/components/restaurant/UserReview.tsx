import React from 'react';

import styles from '../../styles/userReview.module.css';

const UserReview = ({ review }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.avatarArea}>
        <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png" alt="Profile Image" />
      </div>
      <div className={styles.reviewBody}>
        <div className={styles.author}>{review.author}</div>
        <div className={styles.rating}>{review.rating} stars</div>
        <div className={styles.content}>{review.content}</div>
      </div>
    </div>
  )
}

export default UserReview;