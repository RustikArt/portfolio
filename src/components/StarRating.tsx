import React, { useState } from 'react';

interface StarRatingProps {
  initialRating?: number;
  totalStars?: number;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  totalStars = 5,
  size = 'md',
  readOnly = false,
  onChange
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  const handleClick = (index: number) => {
    if (!readOnly) {
      const newRating = index + 1;
      setRating(newRating);
      if (onChange) {
        onChange(newRating);
      }
    }
  };
  
  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoverRating(index + 1);
    }
  };
  
  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };
  
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = hoverRating ? starValue <= hoverRating : starValue <= rating;
        
        return (
          <span
            key={index}
            className={`${sizeClasses[size]} ${isFilled ? 'text-yellow-400' : 'text-gray-300'} ${!readOnly ? 'cursor-pointer' : ''} transition-colors`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            role={!readOnly ? 'button' : undefined}
            aria-label={!readOnly ? `Rate ${index + 1} of ${totalStars} stars` : `Rated ${rating} of ${totalStars} stars`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
