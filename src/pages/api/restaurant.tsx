import { NextApiRequest, NextApiResponse } from 'next';
 
import 'firebase/firestore';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Restaurant[] | { message: string }>
) {
  try {
    const restaurants = [] as Restaurant[]
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    querySnapshot.forEach((doc) => {
        const restaurantData = doc.data();
        const restaurant: Restaurant = {
            id: doc.id,
            name: restaurantData.name,
            description: restaurantData.description,
            image: restaurantData.image
        }
    restaurants.push(restaurant)
    })
    return res.status(200).json(restaurants);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
