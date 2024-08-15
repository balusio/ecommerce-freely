import { useCallback, useEffect } from "react";
import { Product } from "../components/ProductCard";

type UseSearchReturn = {
  getProductByTitle: (title: string) => Product[] | null;
};

const useSearch = (title): UseSearchReturn => {
  useEffect(() => {
    if (title.length > 2) {
    }
  }, [title]);
};
