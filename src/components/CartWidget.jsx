import { useState } from "react";

const CartWidget = () => {
  const [contador, setCount] = useState(0);
  const handleClick = () => {
    setCount(contador + 1);
  };
  return (
    <div className="CartWidget" onClick={handleClick}>
      <span className="material-symbols-outlined">🛒</span>
      <span className="material-symbols-outlined">{contador}</span>
    </div>
  );
};

export default CartWidget;
