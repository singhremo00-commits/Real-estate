export enum PropertyType {
  HOUSE = 'House',
  APARTMENT = 'Apartment',
  VILLA = 'Villa',
  CONDO = 'Condo',
  LAND = 'Land'
}

export enum ListingType {
  SALE = 'For Sale',
  RENT = 'For Rent'
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  type: PropertyType;
  status: ListingType;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  images: string[];
  featured: boolean;
  agent: {
    name: string;
    image: string;
    phone: string;
  };
  features: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'agent' | 'admin';
  avatar?: string;
}
