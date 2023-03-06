import React from 'react';
import styles from '../../styles/RestaurantContainer.module.css';
import RestaurantItem from './RestaurantItem';

interface RestaurantContainerProps {
  items: {
    src: string;
    name: string;
    description: string;
  }[];
}

const RestaurantContainer: React.FC<RestaurantContainerProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <RestaurantItem
          key={index}
          src={item.src}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default RestaurantContainer;