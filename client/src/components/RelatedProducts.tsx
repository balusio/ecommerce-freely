import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";

interface RelatedProductsProps {
  category: string;
}
export default function RelatedProducts({ category }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getRelatedProducts = async () => {
      const response = await fetch(
        `http://localhost:3000/products?category=${category}&limit=3`,
      );
      const data = await response.json();

      setRelatedProducts(data);
    };

    getRelatedProducts();
  }, []);

  return (
    <div className="hidden md:block">
      <p className="my-5 text-start text-3xl tracking-tight text-gray-900">
        Related Products
      </p>
      <div className="mx-auto my-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        {relatedProducts.length ? (
          relatedProducts.map((product: Product) => (
            <ProductCard {...product} />
          ))
        ) : (
          <p className="my-5 text-start text-lg text-gray-900">
            No related products...
          </p>
        )}
      </div>
    </div>
  );
}
