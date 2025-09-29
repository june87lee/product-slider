import React from "react";
import type { Product } from "../../types/product";
import StarRating from "./StarRating";

interface ProductDetailsProps {
  product: Product;
}

/**
 * ProductDetails Component
 * Displays detailed information about the selected product
 * Includes price, description, star rating, and add to cart button
 */
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="product-details">
      {/* Price display */}
      <div className="product-details__price">${product.price.toFixed(2)}</div>

      {/* Product description */}
      <p className="product-details__description">{product.description}</p>

      {/* Star rating with review count */}
      <StarRating rating={product.rating.rate} count={product.rating.count} />

      {/* Add to cart button */}
      <button
        className="product-details__cart-button"
        onClick={() => {
          // Doesn't actually add to cart in this demo
          console.log("Add to cart clicked");
        }}
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
