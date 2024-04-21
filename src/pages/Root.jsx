import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Root() {
  return (
    <div>
      <MainNavigation />
      <div className="mt-20 flex flex-col justify-center">
        <Outlet className="flex-grow mt-20" />
        <Footer className="mt-auto" />
      </div>
    </div>
  );
}

export default Root;
