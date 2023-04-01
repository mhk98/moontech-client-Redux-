import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();
  console.log("data", products);

  let content;

  if (loading) {
    content = <p>loading</p>;
  }
  if (error) {
    content = <p>error</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }
  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }
  return <div className="grid grid-cols-3">{content}</div>;
};

export default Home;
