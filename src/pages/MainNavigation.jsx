import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBarButton from "../components/SideBarButton";
function MainNavigation() {
  const navigate = useNavigate();
  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSideNavOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function navigateHandler(path) {
    const url = "/"+path;
    navigate(url);
    setSideNavOpen(false);
  }

  let navLinksClassNames= "my-auto p-2 border border-2 border-cyan-300 hover:translate-y-1 hover:shadow-none shadow-md hover:bg-cyan-300 hover:text-cyan-100 duration-150 rounded-xl"
  
  function handleNavBurgerClick() {
    var isSideNavOpen = !sideNavOpen;
    setSideNavOpen(isSideNavOpen);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row justify-around content-center max-h-20  bg-cyan-200">
        <div className="flex mr-auto max-w-[75%]" onClick={() => navigateHandler("")}>
          <img className="p-1" src="/src/assets/logo.png" alt="Logo" />
          <h1 className="flex p-1 text-xl max-w-48">Apartamenty Turkusowe Rowy</h1>
        </div>
        <img
          onClick={handleNavBurgerClick}
          className="ml-auto content-center z-20 max-h-16 p-2 absolute top-0 right-0 md:hidden hover:-translate-y-1 duration-150"
          src="/src/assets/navBurger.png"
          alt=""
        />
        
          <nav className="md:flex hidden align-bottom ">
            <ul className="flex p-2 gap-2 flex-row justify-around">
              <li className={navLinksClassNames}>
                <NavLink to="/offer">Oferta</NavLink>
              </li>
              <li className={navLinksClassNames}>
                <NavLink to="/neighbourhood">Okolica</NavLink>
              </li>
              <li className={navLinksClassNames}>
                <NavLink to="/prices">Cennik</NavLink>
              </li>
              <li className={navLinksClassNames}>
                <NavLink to="/reservation">Rezerwacja</NavLink>
              </li>
              <li className={navLinksClassNames}>
                <NavLink to="/contact">Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        {sideNavOpen && (
          <div className="absolute top-0 right-0 w-[80%] z-10 bg-cyan-600 overflow-hidden h-svhright-0 md:hidden">
            <div className="flex flex-col h-svh items-start mt-20">
              <SideBarButton onClick={() => navigateHandler("offer")} text="Oferta"/>
              <SideBarButton onClick={() => navigateHandler("neighbourhood")} text="Okolica"/>
              <SideBarButton onClick={() => navigateHandler("prices")} text="Cennik"/>
              <SideBarButton onClick={() => navigateHandler("reservation")} text="Rezerwacja"/>
              <SideBarButton onClick={() => navigateHandler("contact")} text="Kontakt"/>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default MainNavigation;
