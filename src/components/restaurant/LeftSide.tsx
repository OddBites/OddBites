import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../../styles/leftSide.module.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

// TODO: type 'r'
const LeftSide = ({ r }) => {
  return (
    <div className={styles.bar}>
      <h2 className={styles.name}>{r.name}</h2>
      <div className={styles.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        <span className={styles.address}>{r.address}</span>
      </div>
      <p className={styles.description}>{r.description}</p>
    </div>
  )
}

export default LeftSide;