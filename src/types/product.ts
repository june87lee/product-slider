export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface UseFetchProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface UseSliderLogicReturn {
  activeIndex: number;
  activeProduct: Product | null;
  selectProduct: (index: number) => void;
}
