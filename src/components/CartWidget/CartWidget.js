import carritoDeCompras from "./assets/carritoDeCompras.png";
import ItemCount from "../ItemCount/ItemCount";

const CartWidget = () => {
  return (
    <div>
      <img
        src={carritoDeCompras}
        alt="Carrito de Compras"
        width={50}
        height={50}
      />
      0
    </div>
  );
};

export default CartWidget;
