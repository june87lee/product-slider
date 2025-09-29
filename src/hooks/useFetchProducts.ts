import { useState, useEffect } from "react";
import { DEFAULT_API_URL, DEFAULT_PRODUCT_LIMIT } from "../configs/api";
import type { Product, UseFetchProductsReturn } from "../types/product";

/**
 * Custom hook to fetch products from the FakeStore API
 * Handles loading states and error management
 * Defaults to fetching 5 products if no limit is provided
 * @param {string} apiURL - The API endpoint to fetch products from
 * @param {number} limit - The number of products to fetch
 * @returns {UseFetchProductsReturn} { products, loading, error }
 */
export const useFetchProducts = (
  apiURL: string = DEFAULT_API_URL,
  limit: number = DEFAULT_PRODUCT_LIMIT
): UseFetchProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const toFetchURL = `${apiURL}?limit=${limit}`;

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch(toFetchURL);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [toFetchURL]);

  return { products, loading, error };
};
