import { Link } from "react-router-dom";
import "../css/Item.css";
import React from "react";

//item individual dentro del ItemList
const Item = ({ product }) => {
  return (
    <div className="item-card">
      <h2 className="item-name">{product.name}</h2>
      <img src={product.img} alt={product.name} className="item-image" />
      <p className="item-price">U$D {product.price}</p>
      <Link to={`/product/${product.id}`} className="item-detail-link">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
