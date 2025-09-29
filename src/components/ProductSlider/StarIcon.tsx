import { useId } from "react";

interface StarIconProps {
  fillPercentage: number; // 0 to 100
  className?: string;
}

/**
 * StarIcon Component
 * Reusable SVG star icon for rating display with partial fill support
 * Uses SVG gradient to support fractional ratings (e.g., 4.5 stars)
 * Kinda over-engineered for a simple star, but works well
 * Maybe better to use an icon library in a real application
 *
 * @param {number} fillPercentage - Percentage of star to fill (0-100)
 * @param {string} className - Additional CSS classes to apply
 */
const StarIcon: React.FC<StarIconProps> = ({
  fillPercentage,
  className = "",
}) => {
  // Generate unique ID for this star's gradient to avoid conflicts
  // useId() is a React hook that generates stable, unique IDs for each component instance
  const gradientId = useId();

  return (
    <svg
      className={`star-icon ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${fillPercentage}%`} stopColor="currentColor" />
          <stop offset={`${fillPercentage}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={`url(#${gradientId})`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
