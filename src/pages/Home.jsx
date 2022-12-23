import React from "react";
import { Helmet } from "react-helmet";
import { useProductsContext } from "../contexts/products_context";
import { Link } from "react-router-dom";
import { Product } from "../components";
import Navbar from "../components/common/Navbar";

function Home(props) {
  const { products } = useProductsContext();
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(products);

  return (

    <>

      <Navbar />
    
      <div>
        <Helmet>
          <title>Home | Mumiah Stores</title>
        </Helmet>
        <div>
          <h1>Hello Home</h1>
          {newList.slice(0, 8).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    
    </>
  );
}

export default Home;
