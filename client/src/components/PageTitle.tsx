import { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}
export default function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="mt-8">
      <h1 className="text-gray-800">{children}</h1>
    </div>
  );
}
