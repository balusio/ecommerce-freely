const API_URL = import.meta.env.VITE_API_URL;
let fallbackImage = "https://placehold.jp/400x400.png";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export { API_URL, classNames, fallbackImage };
