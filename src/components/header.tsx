import React from 'react';
import styles from '../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        ODD BITES
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search restaurants..." className={styles.searchInput} />
        <button className={styles.searchButton}>
          <i className="fas fa-search" style={{ marginRight: '4px' }}></i>
          Search
        </button>
      </div>
      <div className={styles.settings}>
        <FontAwesomeIcon icon={faCog} size="lg" />
      </div>
    </header>
  );
};

export default Header;