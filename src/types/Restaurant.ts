// types/Restaurant.ts
export interface Restaurant {
  name: string;
  description: string;
  slides: {id: number, src: string}[];
  image: string;
  lat: number;
  lng: number;
  id: string;
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  nutrition: string;
  src: string;
}

export interface Review {
  id: string,
  name: string,
  content: string,
  src: string,
  date: string,
  rating: number
}