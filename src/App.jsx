import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";

function App() {
  const nombre = "Bienvenidos a Mucha Fuerza!";
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje={nombre} />} />
          <Route
            path="/category/:category"
            element={<ItemListContainer mensaje={"Sección de :"} />}
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
