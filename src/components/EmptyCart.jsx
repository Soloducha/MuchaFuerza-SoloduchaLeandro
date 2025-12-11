import React from "react";
import { Link } from "react-router-dom";
import "../css/EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h1>Tu carrito aun no posee productos</h1>
      <h3>Te ivitamos a ver nuestros productos</h3>
      <Link className="btn-home" to="/">
        Ir al Inicio
      </Link>
    </div>
  );
};

export default EmptyCart;
