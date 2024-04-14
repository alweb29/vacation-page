import { NavLink, useNavigate } from "react-router-dom";
import "../../src/pages/MainNavigation.css"

function MainNavigation(){
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/');
    };

    return(
        <header className="sticky-header">
        <div className="container">
          <div className="logo" onClick={navigateHandler}>
            <img src="/src/assets/logo.png" alt="Logo" />
            <h1>Apartamenty Turkusowe Rowy</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Oferta</NavLink>
              </li>
              <li>
                <NavLink to="/neighbourhood">Okolica</NavLink>
              </li>
              <li>
                <NavLink to="/prices">Cennik</NavLink>
              </li>
              <li>
                <NavLink to="/reservation">Rezerwacja</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default MainNavigation;