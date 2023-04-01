import React from "react";
import { useProducts } from "../context/ProductProvider";
import { actionTypes } from "../state/ProductState/actionTypes";

const ProductCard = ({ product }) => {
  console.log("product", product);

  const { dispatch} = useProducts()
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={product.image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.model}</h2>
          <p>Price: {product.price}</p>
          <small>
            <p>Rating: {product.rating}</p>
          </small>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() =>dispatch({type: actionTypes.ADD_TO_CART, payload:product})}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
