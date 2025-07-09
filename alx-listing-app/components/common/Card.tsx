// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';
import Button from './Button';

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  image,
  price,
  location,
  rating = 0,
  reviews = 0,
  host,
  amenities = [],
  className = '',
}) => {
  const handleBookNow = () => {
    console.log(`Booking property: ${id}`);
    // Add booking logic here
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Property Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback for missing images
            e.currentTarget.src = '/assets/placeholder.jpg';
          }}
        />
      </div>
      
      {/* Property Details */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{location}</p>
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
        </div>
        
        {/* Rating and Reviews */}
        {rating > 0 && (
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">
              {rating} ({reviews} reviews)
            </span>
          </div>
        )}
        
        {/* Host */}
        {host && (
          <p className="text-sm text-gray-600 mb-2">Hosted by {host}</p>
        )}
        
        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="text-xs text-gray-500">+{amenities.length - 3} more</span>
              )}
            </div>
          </div>
        )}
        
        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${price}</span>
            <span className="text-sm text-gray-600"> per night</span>
          </div>
          <Button
            text="Book Now"
            onClick={handleBookNow}
            variant="primary"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;