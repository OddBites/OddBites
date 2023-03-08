import next from 'next';
import React, { useEffect, useState }from 'react';
import styles from 'src/styles/restaurantPanel.module.css';
import Link from "next/link"

interface Props {
  name: string;
  description: string;
  image: string;
  id: string;
}

const RestaurantPanel: React.FC<Props> = ({ name, description, image, id }) => {
  return (
    <div className={styles.restaurantPanel}>
      <Link href={`/restaurants/${id}`}>
      <div className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.image} />
          </div>
          <div className={styles.nameTag}>
            <p>{name}</p>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
      </Link>
    </div>
  );
};

export default RestaurantPanel;