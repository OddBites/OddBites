import React from 'react';
import Header from '../components/header';
import Column from '../components/column';
import styles from '../styles/restaurants.module.css';

const Restaurants: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Column />
    </div>
  );
};

export default Restaurants;