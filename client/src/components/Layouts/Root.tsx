import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";

import AddProductButton from "../AddProductButton";
export default function Root() {
  return (
    <>
      <Navbar />
      <div className="m-auto max-w-7xl">
        <div id="detail">
          <Outlet />
          <AddProductButton />
        </div>
      </div>
    </>
  );
}
