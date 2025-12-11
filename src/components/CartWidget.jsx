import "../css/CartWidget.css";

const CartWidget = ({ counter }) => {
  return (
    <div className="CartWidget">
      <span className="material-symbols-outlined">🛒</span>
      <span className="material-symbols-outlined">{counter}</span>
    </div>
  );
};

export default CartWidget;
