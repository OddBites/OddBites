import React from 'react';
import styles from '../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import User from './User';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        ODD BITES
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search restaurants..." className={styles.searchInput}/>
        <div className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={styles.settings}>
        <User />
        <FontAwesomeIcon icon={faCog} size="lg" />
      </div>
    </header>
  );
};

export default Header;
