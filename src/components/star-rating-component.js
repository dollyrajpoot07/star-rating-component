'use client';
import React, { useState } from 'react';
import styles from './star-rating-component.module.css';

export default function StarRatingComponent({ maxStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className={styles.wrapper}>
      <h2>⭐ Star Rating Component</h2>
      <div className={styles.stars}>
        {[...Array(maxStars)].map((_, index) => {
          const starVal = index + 1;
          return (
            <span
              key={index}
              className={
                starVal <= (hovered || rating)
                  ? styles.filledStar
                  : styles.emptyStar
              }
              onMouseEnter={() => setHovered(starVal)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setRating(prev => (prev === starVal ? 0 : starVal))}
            >
              ★
            </span>
          );
        })}
      </div>
      <p className={styles.label}>
        {rating ? `You rated: ${rating} star${rating > 1 ? 's' : ''}` : 'No rating yet'}
      </p>
    </div>
  );
}
