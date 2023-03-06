import React, { useEffect, useState } from 'react';
import styles from '../../styles/FoodPanel.module.css';

interface Props {
  name: string;
  description: string;
  image: string;
  nutrition: string;
}

const FoodPanel: React.FC<Props> = ({ name, description, image, nutrition}) => {
  return (
    <div className={styles.FoodPanel}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.description}>
        <p>{name}</p>
        <p>Calories: {nutrition}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodPanel;