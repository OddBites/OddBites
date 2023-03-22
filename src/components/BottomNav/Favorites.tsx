import React, { useState } from 'react';
import FavoritesItem from './FavoritesItem';
import styles from '../../styles/Favorites.module.css';

const food = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Subway_in_Burwood_Plaza.jpg',
    name: 'Subway',
    description: 'Subs and Sandwiches',
  },
  {
    image: 'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/uy4abxa8b5hubp59qod4',
    name: 'Burger King',
    description: 'Burgers and Fries',
  },
  {
    image: 'https://goodbuddyspub.com/wp-content/uploads/sites/3/2019/12/GBP_Logo_color.png',
    name: 'Good Buddys',
    description: 'Western Food and Drink',
  },
  {
    image: 'https://cdn.cookielaw.org/logos/63dc78c7-5612-4181-beae-47dead0569ee/666a8744-979e-4263-b2c2-093036f7ec5f/d5e0c553-41c6-41f7-b91f-be2f73c122c6/Chick-fil-A-Logo.png',
    name: 'Chick-fil-A',
    description: 'Chicken Sandwiches',
  },
  {
    image: 'https://www.coppertoptavern.com/wp-content/uploads/sites/2/2020/01/CTT_location_vestal.jpg',
    name: 'CopperTop Tavern',
    description: 'Fancy Bar Foods', 
  }
  ];
  

  const Favorites: React.FC = () => {
    return (
      <div className={styles.container}>
          {food.map((food) => (
            <FavoritesItem
              key={food.name}
              name={food.name}
              description={food.description}
              image={food.image}
            />
          ))}
      </div>
    );
  };
  
  export default Favorites;

