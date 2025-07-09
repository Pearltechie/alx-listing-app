// interfaces/index.ts

// Props for Button component
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

// Props for Card component (property listing)
export interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating?: number;
  reviews?: number;
  host?: string;
  amenities?: string[];
  className?: string;
}

// Property data structure
export interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  reviews: number;
  host: string;
  amenities: string[];
  category: string;
}