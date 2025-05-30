import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; 

const images = [
  "/images/image1.jpg",  
  "/images/image2.jpg",
//   "/images/slider3.jpg",
];

const ImageSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
    </div>
  );
};

export default ImageSlider1;
