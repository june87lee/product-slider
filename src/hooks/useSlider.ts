import { useState } from "react";
import type { Product, UseSliderLogicReturn } from "../types/product";

/**
 * Custom hook to manage slider UI state and interactions
 * Handles active product selection and state management
 * @param {Product[]} products - Array of product data from API
 * @returns {UseSliderLogicReturn} { activeIndex, activeProduct, selectProduct }
 */
export const useSlider = (products: Product[]): UseSliderLogicReturn => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const selectProduct = (index: number): void => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    activeProduct: products[activeIndex] || null,
    selectProduct,
  };
};
