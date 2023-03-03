import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';
import { collectionGroup, getDocs } from 'firebase/firestore';

interface MenuItem {
  id: string;
  name: string;
  src: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuItem[] | { message: string }>
) {
  try {
    const menuItems = [] as MenuItem[];
    const querySnapshot = await getDocs(collectionGroup(db, "menu"));
    querySnapshot.forEach((doc) => {
      const menuItemData = doc.data();
      const menuItem: MenuItem = {
        id: doc.id,
        name: menuItemData.name,
        src: menuItemData.src,
        description: menuItemData.description
      };
      menuItems.push(menuItem);
    });
    return res.status(200).json(menuItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
