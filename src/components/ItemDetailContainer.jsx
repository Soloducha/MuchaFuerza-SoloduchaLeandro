import React, { use } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase.jsx";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    //1.crear referencia a la coleccion
    const docRef = doc(db, "products", id);
    //traer el documento
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() });
        } else {
          setInvalidId(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  });

  if (invalidId) {
    <>
      return <h2>El ID del producto no es válido.</h2>
      <Link className="btn-home" to="/">
        Ir a Home
      </Link>
    </>;
  }

  return <ItemDetail detail={detail} />;
};

export default ItemDetailContainer;
