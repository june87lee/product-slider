import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useSlider } from "../../hooks/useSlider";
import { DEFAULT_PRODUCT_LIMIT } from "../../configs/api";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import "./ProductSlider.scss";

const ProductSlider: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const { activeIndex, activeProduct, selectProduct } = useSlider(products);

  // When loading: render skeleton cards
  // Maybe needs to be refactored out
  if (loading) {
    const placeholders = Array.from({ length: DEFAULT_PRODUCT_LIMIT });
    return (
      <div className="product-slider">
        <div className="product-slider__list">
          {placeholders.map((_, i) => (
            <React.Fragment key={`ph-${i}`}>
              <ProductCard loading isActive={false} onClick={() => {}} />
              <div className="product-slider__accordion-placeholder" />
            </React.Fragment>
          ))}
        </div>

        <div className="product-slider__side-details">
          <div className="product-details product-details--skeleton" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-slider">
        <div className="product-slider__list">
          <div className="product-slider-error">Error: {error}</div>
        </div>

        <div className="product-slider__side-details">
          <div className="product-details product-details--error">
            Unable to load details
          </div>
        </div>
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

            <div
              className={`product-slider__accordion-placeholder ${
                index === activeIndex ? "is-active" : ""
              }`}
            >
              {index === activeIndex && activeProduct ? (
                <div className="product-slider__accordion-content">
                  <ProductDetails product={activeProduct} />
                </div>
              ) : null}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="product-slider__side-details" aria-live="polite">
        {activeProduct ? (
          <ProductDetails product={activeProduct} />
        ) : (
          <div className="product-details product-details--skeleton" />
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
