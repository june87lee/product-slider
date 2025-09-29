import React from "react";
import StarIcon from "./StarIcon";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  showCount?: boolean;
  count?: number;
}

/**
 * StarRating Component
 * Displays a star rating with filled, partially filled, and unfilled stars
 * Supports fractional ratings (e.g., 4.5 stars)
 * Shows rating count in parentheses if provided
 *
 * @param {number} rating - The rating value (e.g., 4.2 out of 5)
 * @param {number} maxStars - Maximum number of stars (default: 5)
 * @param {boolean} showCount - Whether to show the review count
 * @param {number} count - Number of reviews
 */
const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  showCount = true,
  count,
}) => {
  /**
   * Calculate fill percentage for each star
   * Full stars get 100%, empty stars get 0%, partial stars get percentage
   * Maybe needlessly complex for a simple star rating, but works well
   * Maybe needs to be in own utils function
   * TODO: rethink if this logic should be here or removed altogether
   */
  const getStarFillPercentage = (starIndex: number): number => {
    const starPosition = starIndex + 1;

    if (rating >= starPosition) {
      // Full star
      return 100;
    } else if (rating > starIndex && rating < starPosition) {
      // Partial star - calculate percentage
      const fractionalPart = rating - starIndex;
      return fractionalPart * 100;
    } else {
      // Empty star
      return 0;
    }
  };

  const stars = Array.from({ length: maxStars }, (_, index) => {
    return getStarFillPercentage(index);
  });

  return (
    <div className="star-rating">
      <div className="star-rating__stars">
        {stars.map((fillPercentage, index) => (
          <StarIcon key={index} fillPercentage={fillPercentage} />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="star-rating__count">({count})</span>
      )}
    </div>
  );
};

export default StarRating;
