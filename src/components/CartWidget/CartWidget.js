import carritoDeCompras from "./assets/carritoDeCompras.png";

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
