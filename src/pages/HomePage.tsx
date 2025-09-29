import React from "react";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import "../styles/global.scss";

const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <header className="home-page__header">
          <h1 className="home-page__title">Responsive Product Slider</h1>
          <p className="home-page__subtitle">
            A fully responsive React component built with TypeScript, custom
            hooks, and SCSS. Featuring smooth animations and adaptive layouts
            for desktop, tablet, and mobile devices.
          </p>
        </header>

        <section className="home-page__details">
          <h2 className="home-page__details-title">
            Key Implementation Details
          </h2>
          <ul className="home-page__details-list">
            <li>
              <strong>Custom Hooks Architecture:</strong> Separation of concerns
              with
              <code>useFetchProducts</code> for data fetching and{" "}
              <code>useSlider</code> for UI state management, promoting
              reusability and testability.
            </li>
            <li>
              <strong>Responsive Design Pattern:</strong> Desktop displays a
              side-by-side layout while mobile/tablet uses an accordion pattern
              with conditional rendering and context-aware chevron rotation.
            </li>
          </ul>
        </section>

        <section className="home-page__slider">
          <ProductSlider />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
