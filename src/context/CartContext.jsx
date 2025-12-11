import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar item
  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      //existe el prod en el carrito, actualizo cantidad
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, quantity: prod.quantity + qty };
          } else {
            return prod;
          }
        })
      );
    } else {
      //no existe el prod en el carrito, lo agrego
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  //borrar todo el carrito
  const clearCart = () => {
    setCart([]);
  };
  //borrar un item
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //cuenta la cantidad de productos en el carrito
  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  //devuelve si existe el producto en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //devuelve la cantidad de un item en el carrito
  const itemQuantity = (id) => {
    const itemInCart = cart.find((prod) => prod.id === id);

    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      //no hay
      return 0;
    }
  };

  //calcula el precio total del carrito
  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        removeItem,
        addItem,
        itemQuantity,
        totalPrice,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
