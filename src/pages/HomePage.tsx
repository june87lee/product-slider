import React from "react";
import ProductSlider from "../components/ProductSlider/ProductSlider";

/**
 * HomePage Component
 * Main landing page that displays the ProductSlider
 */
const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      <h2>Simple Product Slider Example</h2>
      <ProductSlider />
    </main>
  );
};

export default HomePage;
