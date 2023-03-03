import React from 'react';
import Header from '../components/header';
import Column from '../components/column';
import PopularEats from '../components/popularEats';

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}

const Restaurants: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Column />
        <PopularEats />
      </div>
    </div>
  );
};

export default Restaurants;