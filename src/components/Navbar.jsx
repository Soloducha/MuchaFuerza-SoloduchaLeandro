import "../css/Navbar.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

//nabar con links a categorias y carrito
const Navbar = () => {
  const { cart } = useContext(CartContext);
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
      <NavLink to="/cart">
        <CartWidget counter={cart.length} />
      </NavLink>
    </nav>
  );
};

export default Navbar;
