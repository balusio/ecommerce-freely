import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
export default function Root() {
  return (
    <>
      <Navbar />
      <div className="m-auto max-w-7xl">
        <div className="sidebar mt-8">
          <h1 className="text-gray-800">Give Freely Products</h1>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
