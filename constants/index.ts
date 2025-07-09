// constants/index.ts

// API URLs (for future use)
export const API_BASE_URL = 'https://api.example.com';
export const ENDPOINTS = {
  PROPERTIES: '/properties',
  SEARCH: '/search',
  BOOKING: '/booking',
};

// UI Text Constants
export const UI_TEXT = {
  FIND_PLACE: 'Find your favorite place here!',
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  PRICE_PER_NIGHT: 'per night',
  LOADING: 'Loading...',
  NO_RESULTS: 'No properties found',
};

// Default property categories
export const PROPERTY_CATEGORIES = [
  'Apartment',
  'House',
  'Villa',
  'Cabin',
  'Hotel',
  'Unique stays',
];

// Sample property data (for development)
export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Cozy Mountain Cabin',
    description: 'A beautiful cabin in the mountains with stunning views',
    image: '/assets/cabin.jpg',
    price: 120,
    location: 'Mountain View, CA',
    rating: 4.8,
    reviews: 124,
    host: 'John Doe',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    category: 'Cabin',
  },
  {
    id: '2',
    title: 'Modern City Apartment',
    description: 'Stylish apartment in the heart of the city',
    image: 'public/assets/Image container alx.png',
    price: 85,
    location: 'Downtown, NY',
    rating: 4.6,
    reviews: 89,
    host: 'Jane Smith',
    amenities: ['WiFi', 'Air Conditioning', 'Gym'],
    category: 'Apartment',
  },
];

// Import Property interface
import { Property } from '../interfaces';