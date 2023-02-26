import React from 'react';
import styles from '../styles/GoogleMap.module.css';

const GoogleMap: React.FC = () => {
  return (
    <div>
        <img src={"https://via.placeholder.com/300x200.png?text=MAP"} className={styles.image} />
    </div>
  );
};

export default GoogleMap;