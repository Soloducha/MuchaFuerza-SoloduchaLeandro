import { use, useEffect, useState } from "react";
import "../css/ItemListContainer.css";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "../service/firebase.jsx";

//ItemListContainer
const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const [decorar, setDecorar] = useState("");

  useEffect(() => {
    // conecto a "base de datos"
    const prodCollection = category
      ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products");
    //traer los documentos de la coleccion
    getDocs(prodCollection)
      .then((res) => {
        //limpiar y obtener los datos
        const products = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(products);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, [category]);

  useEffect(() => {
    if (category) {
      // console.log(category);
      if (category === "cintas-de-correr") {
        setDecorar("🏃‍♂️Cintas de Correr");
      } else if (category === "accesorios") {
        setDecorar("🎽 Accesorios");
      } else if (category === "equipamientos") {
        setDecorar("🏋️‍♀️ Equipamientos");
      } else if (category === "bicicletas-fijas") {
        setDecorar("🚴‍♂️ Bicicletas Fijas");
      } else {
        setDecorar("");
      }
    }
  }, [category]);

  if (data.length === 0) {
    return (
      <>
        <h1>
          {props.mensaje} {decorar}{" "}
        </h1>

        <div className="spinner" role="status" aria-live="polite">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </>
    );
  }

  // const SUBIRDATA = () => {
  //   data.forEach(async (item) => {
  //     await addDoc(collection(db, "products"), {
  //       name: item.name,
  //       price: item.price,
  //       category: item.category,
  //       img: item.img,
  //       stock: item.stock,
  //       description: item.description,
  //     });
  //   });
  // };

  return (
    <>
      <div>
        <h1>
          {props.mensaje} {decorar}{" "}
        </h1>
        {category ? null : (
          <div className="descripcion">
            <h3>Encontrá todo lo que necesitas para equipar tu gimnasio</h3>
            <h3>
              Productos de calidad al mejor precio y envíos a todo el país
            </h3>
          </div>
        )}
        <div className="item-list-container">
          <ItemList data={data} />
          {/* <button onClick={SUBIRDATA}>Subir data</button> */}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
