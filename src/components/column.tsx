import React from 'react';
import styles from '../styles/column.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Column: React.FC = () => {
  return (
    <div className={styles.column}>
    <h1>Restaurant Name</h1>
    <p>Location</p>
    <p>Description of Restaurant</p>
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      <ul>
      <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
      <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
      <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
      <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
      <li><FontAwesomeIcon icon={faStarRegular} /></li>
      </ul>
    </div>

    <div className={styles.gallery}>
      <h2>Menu Items</h2>
      <div className={styles.images}>
        <img src="https://via.placeholder.com/100" alt="Meal 1" />
        <img src="https://via.placeholder.com/100" alt="Meal 2" />
        <img src="https://via.placeholder.com/100" alt="Meal 3" />
      </div>
    </div>
  </div>
);
};

export default Column;