import { useEffect, useState } from "react";
import "../css/ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../mockeo/Asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

//ItemListContainer
const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    if (category) {
      getProductsByCategory(category)
        .then((res) => setData(res))
        .catch((error) => console.log(error));
      return;
    } else {
      getProducts()
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    }
  }, [category]);

  if (data.length === 0) {
    return (
      <>
        <h1>
          {props.mensaje} {category}{" "}
        </h1>
        {/* crear un spinner mientras se cargan los productos*/}
        <div className="spinner" role="status" aria-live="polite">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>
          {props.mensaje} {category}
        </h1>

        <div className="descripcion">
          <p>Encontrá todo lo que necesitas para equipar tu gimnasio</p>
          <p>Productos de calidad al mejor precio</p>
          <p>Y envíos a todo el país</p>
        </div>

        <div className="item-list-container">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
