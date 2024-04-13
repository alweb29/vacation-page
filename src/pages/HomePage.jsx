import { NavLink } from "react-router-dom";
import "../../src/App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="sticky-header">
        <div className="container">
          <div className="logo">
            <img src="/src/assets/logo.png" alt="Logo" />
            <h1>Apartamenty Turkusowe Rowy</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink>Oferta</NavLink>
              </li>
              <li>
                <NavLink>Okolica</NavLink>
              </li>
              <li>
                <NavLink>Cennik</NavLink>
              </li>
              <li>
                <NavLink>Rezerwacja</NavLink>
              </li>
              <li>
                <NavLink>Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Twój wypoczynek nad morzem</h2>
          <p>tutaj jakis napis moze byc</p>
        </div>
      </section>

      <section>
        <div>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2024 Apartamenty Turkusowe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
