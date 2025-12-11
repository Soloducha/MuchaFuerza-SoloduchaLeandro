import React from "react";
import { useState } from "react";
import "../css/Checkout.css";
import { useContext } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase.jsx";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart.jsx";

import { doc, updateDoc, increment } from "firebase/firestore";
import { async } from "@firebase/util";

const Checkout = () => {
  const [buyerInfo, setBuyerInfo] = useState({});
  const [validEmail, setValidEmail] = useState(true);
  const [orderId, setOrderId] = useState(null);
  const [process, setProcess] = useState(false);
  const [error, setError] = useState(null);
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyerInfo({
      ...buyerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    const email2 = e.target.value;
    if (buyerInfo.email !== email2) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  // Actualiza el stock de los productos en la tabla products
  const updateStockProducts = async (cart) => {
    const productsRef = collection(db, "products");

    const updatePromises = cart.map(async (item) => {
      const productDoc = doc(productsRef, item.id);
      await updateDoc(productDoc, {
        stock: increment(-item.quantity),
      });
    });

    try {
      await Promise.all(updatePromises);
      console.log("Stock actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el stock: ", error);
    }
  };

  const finalizarCompra = (e) => {
    e.preventDefault(); //para no hacer que el formulario se recargue

    if (!validEmail) {
      alert("Los emails no coinciden. Por favor verifique.");
    } else {
      setError(null);
      setProcess(true);
      updateStockProducts(cart);
      let ordenDeCompra = {
        buyer: buyerInfo,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      console.log(ordenDeCompra);
      addDoc(ventas, ordenDeCompra)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error))
        .finally(setProcess(false));
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div className="checkout-card">
          <h2 className="checkout-thanks">Gracias por su compra!</h2>
          <p className="checkout-orderid">
            Su número de orden es: <strong>{orderId}</strong>
          </p>
        </div>
      ) : (
        <div className="checkout-card">
          <h3>Complete sus datos personales para generar la orden de compra</h3>
          <form className="checkout-form" onSubmit={finalizarCompra}>
            <input
              className="checkout-input-text"
              name="apyn"
              type="text"
              placeholder="Ingrese su nombre y apellido"
              required
              onChange={buyerData}
            />
            <input
              className="checkout-input-text"
              name="email"
              type="email"
              placeholder="Ingrese su email"
              required
              onChange={buyerData}
            />
            <input
              className="checkout-input-text"
              name="email2"
              type="email"
              placeholder="repita su email"
              required
              onChange={handleEmailChange}
            />
            <input
              className="checkout-input-text"
              name="cel"
              type="tel"
              placeholder="Ingrese su numero de celular"
              required
              onChange={buyerData}
            />
            <button className="checkout-btn" type="submit" disabled={process}>
              {process ? "Procesando Orden..." : "Generar Orden"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
