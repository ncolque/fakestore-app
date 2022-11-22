import { Link } from "react-router-dom";
import "./ProductCardStyles.css";

export const ProductCard = ({ id, title, price, image, description }) => {
  return (
    <div>
      <h3 className="productInfo">
        <Link to={`/products/${id}`}>{title}</Link>
      </h3>
      <img src={image} alt="Imagen de producto" className="productImage" />
      {description && <p>{description}</p>}
      <p>Price: {price}</p>
    </div>
  );
};
