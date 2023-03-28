import logo from "./assets/logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav mr-auto">
        <li>
          <img
            className="logo"
            src={logo}
            alt="Carrito de Compras"
            width={150}
            height={150}
          />
        </li>
        <li class="nav-item">
          <button class="btn btn btn-light" type="button">
            Azucareras
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn btn-light" type="button">
            Teteras
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn btn-light" type="button">
            Juegos de té
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn btn-light" type="button">
            Mantequilleras
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn btn-light" type="button">
            Jarras
          </button>
        </li>
        <li class="nav-item ml-auto">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
