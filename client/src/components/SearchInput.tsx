import { Input } from "@headlessui/react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { SyntheticEvent, useEffect, useState } from "react";
import { Product } from "./ProductCard";

interface SearchInputProps {
  onChange: (value: string) => void;
}
export default function SearchInput({ onChange }: SearchInputProps) {
  const [query, setQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(() => query);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);
  /**
   * debounce query to trigger the search query event
   */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(query);
    }, 1200);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  return (
    <div className="relative m-auto h-10 w-[220px]">
      <Input
        name="search"
        value={query}
        onChange={onInputChange}
        placeholder="Search Product"
        className="h-10 w-full bg-white px-6 pr-10 text-gray-800"
      />
      <MagnifyingGlassCircleIcon className="absolute right-2 top-2 size-6 text-gray-300" />
    </div>
  );
}
