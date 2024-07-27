import React from 'react';
import { Rating } from 'flowbite-react';

interface Product {
  rating: number;
}

const ProductRating: React.FC<{ products: Product }> = ({ products }) => {
  const renderStars = (rating: number) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <Rating.Star key={index} filled={index < rating - 1} />
    ));
  };

  return (
    <Rating>
      {renderStars(products.rating)}
    </Rating>
  );
};

export default ProductRating;
