import React from "react";
import type { Product } from "../../types/product";
import ChevronIcon from "./ChevronIcon";

interface ProductCardProps {
  product: Product;
  isActive: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`product-card ${isActive ? "product-card--active" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Select ${product.title}`}
    >
      <div className="product-card__image">
        <img src={product.image} alt={product.title} />
      </div>
      <h3 className="product-card__title">{product.title}</h3>
      <div className="product-card__chevron">
        <ChevronIcon isActive={isActive} />
      </div>
    </div>
  );
};

export default ProductCard;
