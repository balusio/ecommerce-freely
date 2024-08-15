const API_URL = import.meta.env.VITE_API_URL;

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export { API_URL, classNames };
