type QuerySearchObject = Record<keyof Product, any> & {
  limit?: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type Products = Product[];

export { QuerySearchObject, Product, Products };
