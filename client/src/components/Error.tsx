import { useRouteError } from "react-router-dom";

export default function ErrorComponent() {
  const error = useRouteError() as unknown as Record<string, string | number>;
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-gray-800">Oops!</h1>
      <p className="text-gray-800">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-800">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
