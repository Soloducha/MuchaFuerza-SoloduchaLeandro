import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
  };

  // Espera a que el detalle del producto esté definido y tenga propiedades
  if (!detail || Object.keys(detail).length === 0) {
    return (
      <div className="item-detail-loading" role="status" aria-live="polite">
        <div className="skeleton image" />
        <div className="skeleton title" />
        <div className="skeleton price" />
        <div className="skeleton description" />
      </div>
    );
  }

  const stockUpdated = detail.stock - itemQuantity(detail.id);

  return (
    <div className="item-detail-card">
      <h2 className="item-detail-name">{detail.name}</h2>
      <img src={detail.img} alt={detail.name} className="item-detail-image" />
      <p className="item-detail-price">U$D{detail.price}</p>
      <p className="item-detail-description">{detail.description}</p>
      {purchase ? (
        <Link className="btn-add-to-cart" to="/cart">
          Ir al carrito
        </Link>
      ) : (
        <>
          <ItemCount stock={stockUpdated} onAdd={onAdd} />
        </>
      )}
    </div>
  );
};

export default ItemDetail;
