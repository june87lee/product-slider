import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useSlider } from "../../hooks/useSlider";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import "./ProductSlider.scss";

/**
 * ProductSlider Component
 * Main slider component that displays products
 * Desktop: Side-by-side layout with product list and details panel
 * Mobile/Tablet: Accordion layout where details expand below selected product
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
      <div className="product-slider__list">
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductCard
              product={product}
              isActive={index === activeIndex}
              onClick={() => selectProduct(index)}
            />

            {/* Accordion details - only visible on mobile/tablet, shown below active card */}
            {index === activeIndex && activeProduct && (
              <div className="product-slider__accordion-details">
                <ProductDetails product={activeProduct} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Side panel details - only visible on desktop */}
      <div className="product-slider__side-details">
        {activeProduct && <ProductDetails product={activeProduct} />}
      </div>
    </div>
  );
};

export default ProductSlider;
