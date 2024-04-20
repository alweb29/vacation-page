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
  }

  let navLinksClassNames= "my-auto p-2 border border-cyan-900"
  
  function handleNavBurgerClick() {
    var isSideNavOpen = !sideNavOpen;
    setSideNavOpen(isSideNavOpen);
  }

  return (
    <header>
      <div className="flex flex-row justify-around content-center max-h-20  bg-cyan-200 absolute top-0 w-[100%]">
        <div className="flex mr-auto max-w-[70%]" onClick={() => navigateHandler("")}>
          <img className="p-1" src="/src/assets/logo.png" alt="Logo" />
          <h1 className="hidden md:flex p-1 text-xl max-w-64">Apartamenty Turkusowe Rowy</h1>
          <h1 className="flex md:hidden p-1 text-xl max-w-44">Apartamenty Turkusowe Rowy</h1>
        </div>
        <img
          onClick={handleNavBurgerClick}
          className="ml-auto content-center z-20 max-h-16 p-2 absolute top-0 right-0 md:hidden"
          src="/src/assets/navBurger.png"
          alt=""
        />
        
          <nav className="md:flex hidden align-bottom ">
            <ul className="flex p-2 gap-2 flex-row justify-around">
              <li className={navLinksClassNames}>
                <NavLink to="/">Oferta</NavLink>
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
          <div className="absolute top-0 right-0 w-[80%] z-10 bg-cyan-600 h-svhright-0 md:hidden">
            <div className="flex flex-col h-svh items-start mt-20">
              <SideBarButton onClick={() => navigateHandler("")} text="Oferta"/>
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
