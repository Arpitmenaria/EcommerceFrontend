import React from "react";
import './Home.css'
import ImageSlider1 from "./components/ImageSlider1";
import LatestProductList from "./components/Latestarrivals/LatestProductList";
import MenProductList from "./components/Menscollection/MenProductList";
import WomenProductList from "./components/Womenscollection/WomenProductList";
import BestProductList from "./Bestsellers/BestProductList";
import BlogList from "./components/Blog/BlogList"
import Imagebanner from "./components/Imagebanner"

const Home = () => {
  return (
    <div>
      <ImageSlider1 />
      <h1>Welcome to Our Store</h1>
      <section>
        <LatestProductList />
      </section>
      <Imagebanner />
      <section>
        <BestProductList />
      </section>
      <BlogList />
      </div>
  );
};

export default Home;
