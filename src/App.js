import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="container-fluid">
        <ItemListContainer greeting={"Bienvenidos a Cerámicas Carmesí"} />
        <h5>
          Cuando compramos un productos 100% hecho a mano estamos comprando un
          artículo que fue pensado, diseñado y ha pasado por horas de prueba
          para conseguir el producto deseado; estamos comprando productos
          exclusivos, únicos y quizá irrepetibles, es una pieza en la que cada
          detalle fue minuciosamente hecho con amor y respeto en el proceso;
          estás apoyando artesanos que quieren exaltar el arte, su historia y
          antepasados manteniendo viva la tradicional artesanal.
        </h5>
      </div>
    </div>
  );
}

export default App;
