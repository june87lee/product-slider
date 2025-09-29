import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useSlider } from "../../hooks/useSlider";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import "./ProductSlider.scss";

/**
 * ProductSlider Component
 * Main slider component that displays products in a vertical list
 * and shows detailed information in a side panel
 */
const ProductSlider: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const { activeIndex, activeProduct, selectProduct } = useSlider(products);

  if (loading) {
    return (
      <div className="product-slider-loading">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-slider-error">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="product-slider">
      {/* Left side - Product cards list */}
      <div className="product-slider__list">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isActive={index === activeIndex}
            onClick={() => selectProduct(index)}
          />
        ))}
      </div>

      {/* Right side - Product details panel */}
      <div className="product-slider__details">
        {activeProduct && <ProductDetails product={activeProduct} />}
      </div>
    </div>
  );
};

export default ProductSlider;
