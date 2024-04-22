import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Root() {
  return (
    <div>
      <MainNavigation />
      <div className="mt-20 ">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
