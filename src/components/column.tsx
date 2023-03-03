import React from 'react';
import styles from '../styles/column.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import RestaurantContainer from './RestaurantContainer';

const Column: React.FC = () => {
  const RestaurantItems = [
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 1',
      description: 'Description of Restaurant 1',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 2',
      description: 'Description of Restaurant 2',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 3',
      description: 'Description of Restaurant 3',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 4',
      description: 'Description of Restaurant 4',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 5',
      description: 'Description of Restaurant 5',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 6',
      description: 'Description of Restaurant 6',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 7',
      description: 'Description of Restaurant 7',
    }
  ];

  return (
    <div className={styles.column}>
      <h1>Odd Bites Near You</h1>
      <h2>Restaurants</h2>
      <div className={styles.gallery}>
        <RestaurantContainer items={RestaurantItems} />
      </div>
      {/* <div className={styles.reviews}>
        <h2>Reviews</h2>
        <ul>
          <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
          <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
          <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
          <li><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></li>
          <li><FontAwesomeIcon icon={faStarRegular} /></li>
        </ul>
      </div> */}

    </div>
  );
};

export default Column;