import React from 'react';
import styles from '../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        ODD BITES
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search restaurants..."/>
        <div className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={styles.settings}>
        
        <FontAwesomeIcon icon={faCog} size="lg" />
      </div>
    </header>
  );
};

export default Header;