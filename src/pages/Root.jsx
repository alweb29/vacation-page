import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import "../../src/pages/Root.css";

function Root() {
  return (
    <>
      <MainNavigation />
      <div className="Contents">
        <div className="child">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Root;
