import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const nombre = "Juan";
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje={nombre} />
      <Footer />
    </>
  );
}

export default App;
