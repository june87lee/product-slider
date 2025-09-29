import React from "react";
import type { Product } from "../../types/product";
import ChevronIcon from "./ChevronIcon";

interface ProductCardProps {
  product?: Product | null;
  loading?: boolean;
  isActive: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  loading = false,
  isActive,
  onClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`product-card ${isActive ? "product-card--active" : ""} ${
        loading ? "product-card--loading" : ""
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-pressed={isActive}
      aria-label={
        loading ? "Loading product" : `Select product ${product?.title ?? ""}`
      }
    >
      <div className="product-card__image" aria-hidden={loading}>
        {loading || !product ? (
          <div className="skeleton skeleton--image" />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            style={{ display: "block" }}
          />
        )}
      </div>

      <div className="product-card__meta">
        {loading || !product ? (
          <>
            <div className="skeleton skeleton--title" />
          </>
        ) : (
          <h3 className="product-card__title">{product.title}</h3>
        )}
      </div>

      <div className="product-card__chevron" aria-hidden>
        {loading ? (
          <div className="skeleton skeleton--chev" />
        ) : (
          <ChevronIcon isActive={isActive} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
