import { Restaurant } from '@/types/Restaurant';
import React from 'react';

import styles from "../../styles/banner.module.css";

// TODO: type 'r'
const Banner = ({ r }: {r: Restaurant}) => {
  return (
    <div>
      <div className={styles.container}>
        <img src={r.banner} alt="banner" />
      </div>
    </div>
  )
}

export default Banner;