import "../css/Navbar.css";
import "../css/Cartwidget.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

//Navbar
const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img src="../src/assets/logo.png" alt="logo" className="logo-nav" />
      </NavLink>
      <NavLink className="anchor-nav" to="/category/cintas-de-correr">
        Cintas de Correr
      </NavLink>
      <NavLink className="anchor-nav" to="/category/bicicletas-fijas">
        Bicicletas Fijas
      </NavLink>
      <NavLink className="anchor-nav" to="/category/equipamientos">
        Equipamientos
      </NavLink>
      <NavLink className="anchor-nav" to="/category/accesorios">
        Accesorios
      </NavLink>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
