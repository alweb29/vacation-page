import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <MainNavigation />
      <div>
        <div className="mt-20">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Root;
