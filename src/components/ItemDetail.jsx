import React from "react";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

const ItemDetail = ({ detail }) => {
  // Espera a que el detalle del producto esté definido y tenga propiedades
  if (!detail || Object.keys(detail).length === 0) {
    return (
      <div className="item-detail-loading" role="status" aria-live="polite">
        <div className="skeleton image" />
        <div className="skeleton title" />
        <div className="skeleton price" />
        <div className="skeleton desc" />
      </div>
    );
  }

  return (
    <div className="item-detail-card">
      <h2 className="item-detail-name">{detail.name}</h2>
      <img src={detail.img} alt={detail.name} className="item-detail-image" />
      <p className="item-detail-price">U$D{detail.price}</p>
      <p className="item-detail-description">{detail.description}</p>
      <ItemCount stock={detail.stock} />
      <button className="btn-add-to-cart">Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
