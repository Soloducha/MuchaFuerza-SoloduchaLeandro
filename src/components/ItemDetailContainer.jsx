import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mockeo/Asyncmock";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    //llamar al asyncmock para traer el producto por id
    getProductById(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail detail={detail} />;
};

export default ItemDetailContainer;
