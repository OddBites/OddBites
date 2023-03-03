import React from 'react';
import styles from '../styles/GMap.module.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {mapStyles} from '../VanillaJS/mapStyles';
// require('dotenv-webpack').config()
const api_key = process.env.GOOGLE_API_KEY!

const options = {
   styles: mapStyles
 };

const GMap = () => {
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey={api_key}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          options = {options}
        />
     </LoadScript>
  )
}

export default GMap;