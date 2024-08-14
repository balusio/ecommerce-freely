import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

interface ProductCardProps extends Product {}
export default function ProductCard(props: ProductCardProps) {
  const { id, title, image, price } = props;

  return (
    <Link
      to={`products/${id}`}
      key={id}
      className="group rounded-md shadow-md transition ease-in-out hover:scale-105"
    >
      <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          alt={title}
          src={image}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="max-h-200 mt-4 line-clamp-2 text-gray-700 hover:line-clamp-4">
          {title}
        </h3>
        <p className="text- mt-1 font-bold text-gray-900">$ {price}</p>
      </div>
    </Link>
  );
}

export type { Product };
