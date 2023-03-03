import React from 'react';
import styles from '../../styles/column.module.css';
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
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 8',
      description: 'Description of Restaurant 8',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 9',
      description: 'Description of Restaurant 9',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Restaurant 10',
      description: 'Description of Restaurant 10',
    }
  ];

  return (
    <div className={styles.column}>
        <h1 className={styles.title}>Oddest Bites In Your Area</h1>
        <h2 className={styles.subtitle}>Restaurants</h2>
        <div className={styles.divider}></div>
      <div className={styles.gallery}>
        <RestaurantContainer items={RestaurantItems} />
      </div>
    </div>
  );
};

export default Column;