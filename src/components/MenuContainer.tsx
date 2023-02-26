import React from 'react';
import styles from '../styles/menuContainer.module.css';
import MenuItem from './MenuItem';

interface MenuContainerProps {
  items: {
    src: string;
    name: string;
    description: string;
  }[];
}

const MenuContainer: React.FC<MenuContainerProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          src={item.src}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default MenuContainer;