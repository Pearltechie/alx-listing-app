// pages/index.tsx
import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SAMPLE_PROPERTIES, UI_TEXT } from '../constants';

const Home: React.FC = () => {
  const handleSearch = () => {
    console.log('Search clicked');
    // Add search logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">ALX Listing App</h1>
            <Button
              text="Sign In"
              onClick={() => console.log('Sign in clicked')}
              variant="outline"
              size="small"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{UI_TEXT.FIND_PLACE}</h2>
          <p className="text-xl mb-8">Discover amazing places to stay around the world</p>
          <Button
            text="Start Exploring"
            onClick={handleSearch}
            variant="secondary"
            size="large"
          />
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Properties</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PROPERTIES.map((property) => (
              <Card
                key={property.id}
                id={property.id}
                title={property.title}
                description={property.description}
                image={property.image}
                price={property.price}
                location={property.location}
                rating={property.rating}
                reviews={property.reviews}
                host={property.host}
                amenities={property.amenities}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;