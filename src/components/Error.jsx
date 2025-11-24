import { Link } from "react-router-dom";
import "../css/Error.css";

const Error = () => {
  return (
    <div className="error404">
      <h1>Página no encontrada</h1>
      <img src="../src/assets/images/Error404.png" alt="Imagen de error 404" />
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};
export default Error;
