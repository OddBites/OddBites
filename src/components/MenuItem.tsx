import React from 'react';
import styles from '../styles/menuItem.module.css';

interface MenuItemProps {
  src: string;
  name: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ src, name, description }) => {
  return (
    <div className={styles.menuItem}>
      <img src={src} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;