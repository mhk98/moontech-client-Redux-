import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();
  console.log("data", cart);

  let content;

  if (loading) {
    content = <p>loading</p>;
  }
  if (error) {
    content = <p>error</p>;
  }
  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }
  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }
  return <div className="grid grid-cols-3">{content}</div>;
};

export default Cart;
