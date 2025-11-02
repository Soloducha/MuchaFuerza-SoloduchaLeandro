import "../css/Navbar.css";
import "../css/Cartwidget.css";
import CartWidget from "./CartWidget";

//Navbar
const Navbar = () => {
  return (
    <nav className="nav-container">
      <img src="./src/assets/logo.png" alt="logo" className="logo-nav" />
      <a className="anchor-nav" href="#">
        Cintas de Correr
      </a>
      <a className="anchor-nav" href="#">
        Bicicletas Fijas
      </a>
      <a className="anchor-nav" href="#">
        Equipamientos
      </a>
      <a className="anchor-nav" href="#">
        Accesorios
      </a>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
