import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';
import { collection, collectionGroup, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';

export interface MenuItem {
  id: string;
  name: string;
  src: string;
  description: string;
  nutrition: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuItem[] | MenuItem | { message: string }>
) {
  const restaurantId = req.query.restaurantId as string;
  const menuItemId = req.query.menuItemId as string;

  if (req.method === 'POST') {
    try {
      const { name, src, description, nutrition } = req.body;
      const subcollectionRef = collection(db, `restaurants/${restaurantId}/menuItems`);
      console.log(subcollectionRef);
      const newMenuItemRef = await addDoc(subcollectionRef, {
        name,
        src,
        description,
        nutrition
      });
      const newMenuItem: MenuItem = {
        id: newMenuItemRef.id,
        name,
        src,
        description,
        nutrition
      };
      return res.status(201).json(newMenuItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  try {
    if (restaurantId && menuItemId) {
      const menuItemRef = doc(collection(db, `restaurants/${restaurantId}/menuItems`), menuItemId);
      const menuItemDoc = await getDoc(menuItemRef);

      if (menuItemDoc.exists()) {
        const menuItemData = menuItemDoc.data();
        const menuItem: MenuItem = {
          id: menuItemDoc.id,
          name: menuItemData.name,
          src: menuItemData.src,
          description: menuItemData.description,
          nutrition: menuItemData.nutrition
        };
        return res.status(200).json(menuItem);
      } else {
        return res.status(404).json({ message: 'Menu item not found' });
      }
    } else if (restaurantId) {
      const menuItems = [] as MenuItem[];
      const querySnapshot = await getDocs(collection(db, `restaurants/${restaurantId}/menuItems`));
      querySnapshot.forEach((doc) => {
        const menuItemData = doc.data();
        const menuItem: MenuItem = {
          id: doc.id,
          name: menuItemData.name,
          src: menuItemData.src,
          description: menuItemData.description,
          nutrition: menuItemData.nutrition
        };
        menuItems.push(menuItem);
      });
      return res.status(200).json(menuItems);
    } else {
      const menuItems = [] as MenuItem[];
      const querySnapshot = await getDocs(collectionGroup(db, 'menuItems'));
      querySnapshot.forEach((doc) => {
        const menuItemData = doc.data();
        const menuItem: MenuItem = {
          id: doc.id,
          name: menuItemData.name,
          src: menuItemData.src,
          description: menuItemData.description,
          nutrition: menuItemData.nutrition
        };
        menuItems.push(menuItem);
      });
      return res.status(200).json(menuItems);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
