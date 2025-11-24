import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

function App() {
  const [count, setCount] = useState(0);

  const nombre = "Bienvenidos a Mucha Fuerza!";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje={nombre} />} />
        <Route
          path="/category/:category"
          element={<ItemListContainer mensaje={"Productos de la categoría:"} />}
        />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
