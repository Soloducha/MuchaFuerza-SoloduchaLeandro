import { useState, useEffect } from "react";
import "../css/ItemCount.css";

// Componente para manejar el conteo de ítems
const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {stock > 0 ? (
        <div className="count-card">
          <button className="btn-decrementar" onClick={decrementar}>
            -
          </button>
          <span className="span-count">{count}</span>
          <button className="btn-incrementar" onClick={incrementar}>
            +
          </button>
          <button
            className="btn-comprar"
            onClick={() => onAdd(count)}
            disabled={stock === 0 || count === 0}
          >
            Agregar al Carrito
          </button>
        </div>
      ) : (
        <div>
          <p>No nos queda en Stock el producto</p>
        </div>
      )}
    </>
  );
};

export default ItemCount;
