import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartView.css";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    settotalPrice(total);
  }, [cart]);

  console.log(cart);
  return (
    <div className="cart-card">
      <h1>Tu 🛒 de compras</h1>
      <div className="cart-item">
        {cart.map((shoppingCart) => (
          <div key={shoppingCart.id} className="cart-id">
            <img
              src={shoppingCart.img}
              alt={shoppingCart.name}
              className="cart-img"
            />
            <div className="cart-item-details">
              <span className="cart-text">
                <strong>{shoppingCart.name}</strong>
              </span>
              <span className="cart-text">
                Precio unitario: U$D {shoppingCart.price},00
              </span>
              <span className="cart-text">
                Cantidad: {shoppingCart.quantity}
              </span>
              <span className="cart-text">
                Subtotal:
                <strong>
                  U$D {shoppingCart.quantity * shoppingCart.price},00
                </strong>
              </span>
            </div>
            <button
              className="cart-btn cart-btn-red"
              onClick={() => removeItem(shoppingCart.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      <span className="cart-total">Total a pagar: U$D {totalPrice} </span>
      <div className="cart-btns">
        <button className="cart-btn cart-btn-red" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to={"/checkout"}>
          <button className="cart-btn cart-btn-buy">Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default CartView;
