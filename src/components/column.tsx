import React from 'react';
import styles from '../styles/column.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import MenuContainer from './MenuContainer';

const Column: React.FC = () => {
  const menuItems = [
    {
      src: 'https://via.placeholder.com/100',
      name: 'Meal 1',
      description: 'Description of Meal 1',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Meal 2',
      description: 'Description of Meal 2',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Meal 3',
      description: 'Description of Meal 3',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Meal 4',
      description: 'Description of Meal 4',
    },
    {
      src: 'https://via.placeholder.com/100',
      name: 'Meal 5',
      description: 'Description of Meal 5',
    }
  ];

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
        <MenuContainer items={menuItems} />
      </div>
    </div>
  );
};

export default Column;