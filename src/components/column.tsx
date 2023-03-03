import React, { useState, useEffect } from 'react';
import styles from '../styles/column.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import MenuContainer from './MenuContainer';

interface MenuItem {
  id: string;
  name: string;
  src: string;
  description: string;
}
const Column: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

useEffect(() => {
  const fetchMenuItems = async () => {
    try {
      const res = await fetch('/api/menuItem');
      const data = await res.json();
      setMenuItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchMenuItems();
}, []);

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
