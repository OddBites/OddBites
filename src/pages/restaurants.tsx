import React from 'react';
import Header from '../components/header';
import Column from '../components/column';
import PopularEats from '../components/popularEats';

const Restaurants: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <Column />
        <PopularEats />
      </div>
    </div>
  );
};

export default Restaurants;