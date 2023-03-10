import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';
import { collection, addDoc, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';

interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  slides: {id: number, src: string}[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Restaurant[] | Restaurant | { message: string }>
) {
  if (req.method === 'POST') {
    // Add a new restaurant
    try {
      const { name, description, image, slides } = req.body;
      const restaurantRef = collection(db, 'restaurants');
      const docRef = await addDoc(restaurantRef, {
        name,
        description,
        image,
        slides
      });
      
      const restaurant: Restaurant = {
        id: docRef.id,
        name,
        description,
        image,
        slides
      };
      return res.status(201).json(restaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    // Update a restaurant
    try {
      const { id } = req.query;
      const { name, description, image, slides } = req.body;
      const docRef = doc(db, 'restaurants', id as string);
      await setDoc(docRef, {
        name,
        description,
        image,
        slides
      });
      const updatedRestaurant: Restaurant = {
        id: id as string,
        name,
        description,
        image,
        slides
      };
      return res.status(200).json(updatedRestaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    // Get all restaurants or get one by id
    try {
      const { id } = req.query;
      if (id) {
        // Get one restaurant by id
        const docRef = doc(db, 'restaurants', id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const restaurantData = docSnap.data();
          console.log("RESTAURANTDATA", restaurantData);
          const restaurant: Restaurant = {
            id: docSnap.id,
            name: restaurantData.name,
            description: restaurantData.description,
            image: restaurantData.image,
            slides: restaurantData.slides
          };
          return res.status(200).json(restaurant);
        } else {
          return res.status(404).json({ message: 'Restaurant not found' });
        }
      } else {
        // Get all restaurants
        const restaurants = [] as Restaurant[];
        const querySnapshot = await getDocs(collection(db, 'restaurants'));
        querySnapshot.forEach((doc) => {
          const restaurantData = doc.data();
          const restaurant: Restaurant = {
            id: doc.id,
            name: restaurantData.name,
            description: restaurantData.description,
            image: restaurantData.image,
            slides: restaurantData.slides
          };
          restaurants.push(restaurant);
        });
        return res.status(200).json(restaurants);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Method not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
