import "../css/ItemListContainer.css";

//ItemListContainer
const ItemListContainer = (props) => {
  return (
    <>
      <h1>
        Bienvenidos a Mucha Fuerza <span> {props.mensaje} </span>!
      </h1>
    </>
  );
};
export default ItemListContainer;
