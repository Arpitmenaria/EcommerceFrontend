import React from 'react'
import "./Imagebanner.css"; 

const images = [
    "/images/image4.jpg",  
     ];

export const Imagebanner = () => {
  return (
    <div>
        <div className="banner">
      <img src={images} alt="banner" className="banner-image" />
    </div>
    </div>
  )
}
 export default Imagebanner;