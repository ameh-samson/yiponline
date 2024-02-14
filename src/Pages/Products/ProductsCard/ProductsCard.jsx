import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ title, content, url }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>

      <div>
        <a href={url}>Visit +</a>
      </div>
    </div>
  );
};

export default ProductsCard;
