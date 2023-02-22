import React from 'react';
import Header from '../components/header';
import Column from '../components/column';
import PopularEats from '../components/popularEats';

const Restaurants: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'grid' }}>
         <div className='ColumnGrid'>
            <Column />
         </div>
         <div className='MapGrid'>
            /MapComponent
         </div>
         <div className='PopularEats-FavoritesGrid'>
            <PopularEats />
            /FavoritesComponent
         </div>

      </div>
    </div>
  );
};

export default Restaurants;