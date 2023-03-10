import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';
import { collection, collectionGroup, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';

export interface Review {
  id: string;
  name: string;
  date: string;
  content: string;
  rating: number;
  src: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[] | Review | { message: string }>
) {
  const restaurantId = req.query.restaurantId as string;
  const reviewId = req.query.reviewId as string;

  if (req.method === 'POST') {
    try {
      const { name, date, content, rating, src } = req.body;
      const subcollectionRef = collection(db, `restaurants/${restaurantId}/reviews`);
      console.log(subcollectionRef);
      const newReviewRef = await addDoc(subcollectionRef, {
        name,
        date,
        content,
        rating,
        src
      });
      const newReview: Review = {
        id: newReviewRef.id,
        name,
        date,
        content,
        rating,
        src
      };
      return res.status(201).json(newReview);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  try {
    if (restaurantId && reviewId) {
      const reviewRef = doc(collection(db, `restaurants/${restaurantId}/reviews`), reviewId);
      const reviewDoc = await getDoc(reviewRef);

      if (reviewDoc.exists()) {
        const reviewData = reviewDoc.data();
        const review: Review = {
          id: reviewDoc.id,
          name: reviewData.name,
          src: reviewData.src,
          content: reviewData.content,
          rating: reviewData.rating,
          date: reviewData.date
        };
        return res.status(200).json(review);
      } else {
        return res.status(404).json({ message: 'Review not found' });
      }
    } else if (restaurantId) {
      const reviews = [] as Review[];
      const querySnapshot = await getDocs(collection(db, `restaurants/${restaurantId}/reviews`));
      querySnapshot.forEach((doc) => {
        const reviewData = doc.data();
        const review: Review = {
          id: doc.id,
          name: reviewData.name,
          src: reviewData.src,
          content: reviewData.content,
          rating: reviewData.rating,
          date: reviewData.date
        };
        reviews.push(review);
      });
      return res.status(200).json(reviews);
    } else {
      const reviews = [] as Review[];
      const querySnapshot = await getDocs(collectionGroup(db, 'reviews'));
      querySnapshot.forEach((doc) => {
        const reviewData = doc.data();
        const review: Review = {
          id: doc.id,
          name: reviewData.name,
          src: reviewData.src,
          content: reviewData.content,
          rating: reviewData.rating,
          date: reviewData.date
        };
        reviews.push(review);
      });
      return res.status(200).json(reviews);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
