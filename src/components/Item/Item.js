import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="CardItem">
      <header className="Header">
        <h3 className="ItemHeader">{name}</h3>
      </header>
      <picture>
        <img
          src={img}
          alt={name}
          className="ItemImg"
          width="350"
          height="350"
        />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          {" "}
          <button className="btn btn btn-light" type="button">
            Ver detalle
          </button>{" "}
        </Link>
      </footer>
    </div>
  );
};

export default Item;
