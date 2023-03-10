import React from 'react';

import styles from '../../styles/menuItem.module.css';

const MenuItem = ({ item }:any) => {
  return (
    <div className={styles.itemContainer}>
      <img src={item.src} alt="Menu Item" />
      <div className="body">
        <div className={styles.name}>{item.name}</div>
        <div className={styles.kcal}>{item.nutrition}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
    </div>
  )
}

export default MenuItem;