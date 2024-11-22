import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <div className="flex-grow mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
