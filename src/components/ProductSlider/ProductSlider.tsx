import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
// import { useSlider } from "../../hooks/useSlider";

/**
 * ProductSlider Component
 * Main slider component that displays products and handles selection
 * TODO: Implement product cards and details panel
 */
const ProductSlider: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  // const { activeIndex, activeProduct, selectProduct } = useSlider(products);

  console.log("Products:", products);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-slider">
      <h2>Product Slider - Coming Soon</h2>
      <p>Products loaded: {products.length}</p>
    </div>
  );
};

export default ProductSlider;
