import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.js';

export default async function handler(req, res) {
  const usersRef = collection(db, 'users');
  const snapshot = await getDocs(usersRef);
  const users = snapshot.docs.map((doc) => doc.data());
  res.status(200).json(users);
}

