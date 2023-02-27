import React from 'react';

import styles from '../../styles/menuItem.module.css';

const MenuItem = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.kcal}>{item.kcal} calories</div>
      <div className={styles.description}>{item.description}</div>
    </div>
  )
}

export default MenuItem;