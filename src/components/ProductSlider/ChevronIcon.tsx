import React from "react";

interface ChevronIconProps {
  isActive: boolean;
  className?: string;
}

/**
 * ChevronIcon Component
 * Reusable SVG chevron icon that rotates and fills based on active state
 * Used in product cards to indicate selection
 * Maybe a bit over-engineered for a simple icon, but demonstrates componentization
 *
 * @param {boolean} isActive - Whether the icon should be in active state (rotated and filled)
 * @param {string} className - Additional CSS classes to apply
 */
const ChevronIcon: React.FC<ChevronIconProps> = ({
  isActive,
  className = "",
}) => {
  return (
    <svg
      className={`chevron-icon ${
        isActive ? "chevron-icon--active" : ""
      } ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="currentColor"
        strokeWidth="2"
        fill={isActive ? "currentColor" : "none"}
      />
      <path
        d="M9 11L12 14L15 11"
        stroke={isActive ? "white" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
