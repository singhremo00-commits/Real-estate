import { Property, PropertyType, ListingType } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Ocean View Villa',
    description: 'Experience the pinnacle of luxury living in this breathtaking oceanfront villa. Featuring panoramic views, an infinity pool, and state-of-the-art smart home integration.',
    price: 4500000,
    location: 'Malibu, CA',
    address: '123 Coastal Highway, Malibu, CA 90265',
    type: PropertyType.VILLA,
    status: ListingType.SALE,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6500,
    image: 'https://picsum.photos/id/11/800/600',
    images: ['https://picsum.photos/id/11/800/600', 'https://picsum.photos/id/12/800/600', 'https://picsum.photos/id/13/800/600'],
    featured: true,
    agent: {
      name: 'Sarah Jenkins',
      image: 'https://picsum.photos/id/64/100/100',
      phone: '(555) 123-4567'
    },
    features: ['Ocean View', 'Infinity Pool', 'Smart Home', 'Wine Cellar', 'Home Theater']
  },
  {
    id: '2',
    title: 'Modern Downtown Penthouse',
    description: 'Sleek and sophisticated penthouse in the heart of the city. Floor-to-ceiling windows offer stunning skyline views day and night.',
    price: 2800000,
    location: 'New York, NY',
    address: '456 Park Avenue, New York, NY 10022',
    type: PropertyType.APARTMENT,
    status: ListingType.SALE,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    image: 'https://picsum.photos/id/49/800/600',
    images: ['https://picsum.photos/id/49/800/600', 'https://picsum.photos/id/50/800/600', 'https://picsum.photos/id/51/800/600'],
    featured: true,
    agent: {
      name: 'Michael Chang',
      image: 'https://picsum.photos/id/65/100/100',
      phone: '(555) 987-6543'
    },
    features: ['City View', 'Concierge', 'Private Elevator', 'Rooftop Terrace']
  },
  {
    id: '3',
    title: 'Cozy Suburban Family Home',
    description: 'A charming family home nestled in a quiet cul-de-sac. Features a spacious backyard, modern kitchen, and easy access to top-rated schools.',
    price: 850000,
    location: 'Austin, TX',
    address: '789 Oak Lane, Austin, TX 78701',
    type: PropertyType.HOUSE,
    status: ListingType.SALE,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    image: 'https://picsum.photos/id/164/800/600',
    images: ['https://picsum.photos/id/164/800/600', 'https://picsum.photos/id/165/800/600'],
    featured: false,
    agent: {
      name: 'Sarah Jenkins',
      image: 'https://picsum.photos/id/64/100/100',
      phone: '(555) 123-4567'
    },
    features: ['Large Backyard', 'Renovated Kitchen', 'Hardwood Floors', 'Fireplace']
  },
  {
    id: '4',
    title: 'Executive Rental Condo',
    description: 'Perfect for business travelers or young professionals. Fully furnished with premium amenities and located near the financial district.',
    price: 4500,
    location: 'Chicago, IL',
    address: '321 Lake Shore Dr, Chicago, IL 60611',
    type: PropertyType.CONDO,
    status: ListingType.RENT,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: 'https://picsum.photos/id/238/800/600',
    images: ['https://picsum.photos/id/238/800/600', 'https://picsum.photos/id/239/800/600'],
    featured: false,
    agent: {
      name: 'Michael Chang',
      image: 'https://picsum.photos/id/65/100/100',
      phone: '(555) 987-6543'
    },
    features: ['Furnished', 'Gym Access', 'Doorman', 'Lake View']
  },
  {
    id: '5',
    title: 'Secluded Mountain Retreat',
    description: 'Escape to nature in this custom-built log cabin. surrounded by pine trees with direct access to hiking trails.',
    price: 1200000,
    location: 'Aspen, CO',
    address: '555 Mountain View Rd, Aspen, CO 81611',
    type: PropertyType.HOUSE,
    status: ListingType.SALE,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    image: 'https://picsum.photos/id/216/800/600',
    images: ['https://picsum.photos/id/216/800/600', 'https://picsum.photos/id/217/800/600'],
    featured: true,
    agent: {
      name: 'Sarah Jenkins',
      image: 'https://picsum.photos/id/64/100/100',
      phone: '(555) 123-4567'
    },
    features: ['Mountain View', 'Private Trails', 'Hot Tub', 'Wood Stove']
  },
  {
    id: '6',
    title: 'Modernist Beach House',
    description: 'Architectural masterpiece steps from the sand. Open concept living with brutalist influences and warm wood accents.',
    price: 3100000,
    location: 'Miami, FL',
    address: '888 Ocean Drive, Miami, FL 33139',
    type: PropertyType.HOUSE,
    status: ListingType.SALE,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    image: 'https://picsum.photos/id/229/800/600',
    images: ['https://picsum.photos/id/229/800/600', 'https://picsum.photos/id/230/800/600'],
    featured: true,
    agent: {
      name: 'Michael Chang',
      image: 'https://picsum.photos/id/65/100/100',
      phone: '(555) 987-6543'
    },
    features: ['Direct Beach Access', 'Pool', 'Modern Design', 'Gated']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James Wilson",
    role: "Home Buyer",
    content: "EstatePrime made finding our dream home incredibly easy. The virtual tours were a game changer!",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Property Investor",
    content: "Professionalism at its finest. Sold my property in record time above asking price.",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    id: 3,
    name: "Thomas Anderson",
    role: "Renter",
    content: "Great platform with verified listings. I felt safe and secure throughout the entire process.",
    image: "https://picsum.photos/id/669/100/100"
  }
];
