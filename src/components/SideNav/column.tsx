import React from 'react';
import styles from '../../styles/column.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import RestaurantContainer from './RestaurantContainer';
import { useRouter } from 'next/router';

const Column: React.FC = () => {
  const RestaurantItems = [
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Daniellas',
      description: 'Steak House',
    },
    {
      src: 'https://www.tullysgoodtimes.com/wp-content/uploads/rochester.jpg',
      name: 'Tullys',
      description: 'Tender Shack',
    },
    {
      src: 'http://static1.squarespace.com/static/5f08a949e498be312e9cc489/t/5f08bea5b3a8ea1d94c79e0a/1594408615558/Tonys%252BLogo%252BFlipped.jpg?format=1500w',
      name: 'Tim Tonys',
      description: 'Sandwiches',
    },
    {
      src: 'https://dsu113jcnntrj.cloudfront.net/wp-content/uploads/2022/03/Tommys.jpg',
      name: 'Tommys Tavern',
      description: 'Bar Foods',
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/b8/75/fc/applebee-s-neighborhood.jpg',
      name: 'Appblebees',
      description: 'Grill and Bar',
    },
    {
      src: 'https://goodbuddyspub.com/wp-content/uploads/sites/3/2019/12/GBP_Logo_color.png',
      name: 'Good Buddys',
      description: 'Western Food and Drink',
    },
    {
      src: 'https://www.coppertoptavern.com/wp-content/uploads/sites/2/2020/01/CTT_location_vestal.jpg',
      name: 'CopperTop Tavern',
      description: 'Fancy Bar Foods', 
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Subway_in_Burwood_Plaza.jpg',
      name: 'Subway',
      description: 'Subs and Sandwiches',
    },
    {
      src: 'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/uy4abxa8b5hubp59qod4',
      name: 'Burger King',
      description: 'Burgers and Fries',
    },
    {
      src: 'https://cdn.cookielaw.org/logos/63dc78c7-5612-4181-beae-47dead0569ee/666a8744-979e-4263-b2c2-093036f7ec5f/d5e0c553-41c6-41f7-b91f-be2f73c122c6/Chick-fil-A-Logo.png',
      name: 'Chick-fil-A',
      description: 'Chicken Sandwiches',
    }
  ];

  const router = useRouter();

  return (
    <div className={styles.column}>
        <h1 className={styles.title}>Oddest Bites In Your Area</h1>
        <h2 className={styles.subtitle}>Restaurants</h2>
        <div className={styles.divider}></div>
      <div className={styles.gallery}>
        <RestaurantContainer items={RestaurantItems} />
      </div>
      <button className={styles.submitButton} onClick={() => router.push('/menuItems/submission')}>Submit a new food item</button>
    </div>
  );
};

export default Column;