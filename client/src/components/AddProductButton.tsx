import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ROUTES } from "../Router";

export default function AddProductButton() {
  return (
    <div className="group fixed bottom-6 right-4 flex h-[90px] w-[200px] flex-row-reverse content-center items-center overflow-hidden transition-all">
      <Link
        to={ROUTES.addProduct}
        className="mr-2 h-12 w-12 rounded-full bg-orange-500 group-hover:scale-110"
      >
        <PlusCircleIcon className="size-12 text-white transition-all group-hover:rotate-90" />
      </Link>
      <p className="absolute right-0 rounded-lg bg-orange-500 p-2 text-white opacity-0 transition-all group-hover:right-[60px] group-hover:opacity-100">
        Add Product
      </p>
    </div>
  );
}
