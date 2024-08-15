import { Button } from "@headlessui/react";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant: "primary" | "secondary";
  type?: HTMLButtonElement["type"];
}

const defaultClasses = "w-full px-4 py-2 rounded transition-all";
const buttonVariants = {
  primary: `bg-gray-800 text-white ${defaultClasses} hover:bg-white hover:border-gray-800 hover:text-gray-800`,
  secondary: `bg-transparent text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white ${defaultClasses}`,
};
export default function ButtonComponent({
  onClick,
  children,
  className,
  variant = "primary",
  type,
}: ButtonProps) {
  const styleVariants = buttonVariants[variant];
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`${styleVariants} ${className}`}
    >
      {children}
    </Button>
  );
}
