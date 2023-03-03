import React from 'react';
import styles from '../styles/GoogleMap.module.css';

const GoogleMap: React.FC = () => {
  return (
    <div>
        <img src={"https://via.placeholder.com/700x400.png?text=MAP"} className={styles.image} />
    </div>
  );
};

export default GoogleMap;