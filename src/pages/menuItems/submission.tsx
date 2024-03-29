import { FormEventHandler, useState } from 'react';
import styles from '../../styles/submission.module.css';

const MenuSubmissionPage = () => {
  const [restaurantId, setRestaurantId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Send form data to API or server
    fetch(`/api/menuItems?restaurantId=${restaurantId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
        nutrition: calories,
        src: image
      })
    })
  };
    
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h1 className={styles.title}>Submit a Menu Item</h1>
      </div>
      <div className={styles.divider}></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Restaurant Id:
          <input type="text" value={name} onChange={(e) => setRestaurantId(e.target.value)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Calorie Count:
          <input type="string" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="string" value={image} onChange={(e) => setImage(e.target.value)} />        
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
   </div>

  );
};

export default MenuSubmissionPage;
