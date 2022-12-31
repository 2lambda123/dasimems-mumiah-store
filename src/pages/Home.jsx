import React from "react";
import { Helmet } from "react-helmet";
import {
  AdvertisementOne,
  AdvertisementTwo,
  Categories,
  Hero,
  Products,
  Steps,
} from "../components";

function Home(props) {
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
