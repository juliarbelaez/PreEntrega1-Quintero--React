import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <h5>
        Cuando compramos un productos 100% hecho a mano estamos comprando un
        artículo que fue pensado, diseñado y ha pasado por horas de prueba para
        conseguir el producto deseado; estamos comprando productos exclusivos,
        únicos y quizá irrepetibles, es una pieza en la que cada detalle fue
        minuciosamente hecho con amor y respeto en el proceso; estás apoyando
        artesanos que quieren exaltar el arte, su historia y antepasados
        manteniendo viva la tradicional artesanal.
      </h5>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
