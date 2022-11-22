import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result) => {
      setProduct(result.data);
    });
  }, []);

  return (
    <div>
      <h1>Información del producto con identificador: {id}</h1>
      {product && (
        <ProductCard
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      )}
    </div>
  );
};
