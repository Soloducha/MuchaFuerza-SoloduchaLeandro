import { useState, useEffect } from "react";
import "../css/ItemCount.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-card">
      <button className="btn-decrementar" onClick={decrementar}>
        -
      </button>
      <span className="span-count">{count}</span>
      <button className="btn-incrementar" onClick={incrementar}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
