import React from "react";
import { Helmet } from "react-helmet";
import {
  AdvertisementOne,
  AdvertisementTwo,
  Categories,
  FormSuccess,
  Hero,
  Loader,
  Products,
  Steps,
} from "../components";
import { useProductsContext } from "../contexts/products_context";

function Home(props) {
  

  const {products_loading, cat_loading} = useProductsContext();

  if(products_loading || cat_loading){
    return <Loader />
  }

  return (

    <>
      <Helmet>
        <title>Home | Mumiah Stores</title>
      </Helmet>

      <Hero />

      <Categories />

      <Steps />

      <AdvertisementOne />

      <Products />

      <AdvertisementTwo />

    </>
  );
}

export default Home;
