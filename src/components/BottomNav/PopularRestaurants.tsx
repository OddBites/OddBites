import React, { useEffect, useState } from 'react';
import RestaurantPanel from './RestaurantPanel';
import styles from '../../styles/PopularRestaurants.module.css';
import { Restaurant } from '@/types/Restaurant';

// const restaurants = [
//   {
//     name: "Restaurant 1",
//     description: "Description 1",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+1",
//     id: "1"
//   },
//   {
//     name: "Restaurant 2",
//     description: "Description 2",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+2",
//     id: "2"
//   },
//   {
//     name: "Restaurant 3",
//     description: "Description 3",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+3",
//     id: "3"
//   },
//   {
//     name: "Restaurant 4",
//     description: "Description 4",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+4",
//     id: "4"
//   },
//   {
//     name: "Restaurant 5",
//     description: "Description 5",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+5",
//     id: "5"
//   },
//   {
//     name: "Restaurant 6",
//     description: "Description 6",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+6",
//     id: "6"
//   },
//   {
//     name: "Restaurant 7",
//     description: "Description 7",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+7",
//     id: "7"
//   },
//   {
//     name: "Restaurant 8",
//     description: "Description 8",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+8",
//     id: "8"
//   },
//   {
//     name: "Restaurant 9",
//     description: "Description 9",
//     image: "https://via.placeholder.com/300x200.png?text=Restaurant+9",
//     id: "9"
//   },
// ];


const PopularRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    async function fetchData() {
      try{
        const res = await fetch('/api/restaurants');
        const data = await res.json();
        setRestaurants(data);
      } catch(error){
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if(restaurants.length === 0) {
    return (
      <div className={styles.noRestaurants}>There are no restaurants available.</div>
    );
  }

  return (
    <div className={styles.restaurantGrid}>
      {restaurants.map((restaurant) => (
        <RestaurantPanel
          key={restaurant.name}
          name={restaurant.name}
          description={restaurant.description}
          image={restaurant.image}
          id={restaurant.id}
        />
      ))}
    </div>
  );
};

export default PopularRestaurants;
