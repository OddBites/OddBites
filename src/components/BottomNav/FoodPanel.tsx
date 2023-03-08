import React, { useEffect, useState } from 'react';
import styles from '../../styles/FoodPanel.module.css';

interface Props {
  name: string;
  description: string;
  image: string;
  nutrition: string;
}

const FoodPanel: React.FC<Props> = ({ name, description, image, nutrition }) => {
  return (
    <div className={styles.FoodPanel}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.nameTag}>
        <p>{name}</p>
      </div>
      <div className={styles.kcal}>
      <p>Calories: {nutrition}</p>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodPanel;