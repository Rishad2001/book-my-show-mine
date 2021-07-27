import React from "react";
import HeroSlider from "react-slick";

//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

    const settingsLG = {
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "300px",
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
      };
      const settings = {    
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const images = [
        "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        "https://images.unsplash.com/photo-1627245743789-304667cbcb1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1627001191081-34bc12604d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        "https://images.unsplash.com/photo-1626884855789-2008c7eb9be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    ];  

    return (
      // for mobile and tab screen
        <>
          <div className="lg:hidden">
            <HeroSlider {...settings}>
              {images.map((image) => (
              <div className="w-20 h-56 md:h-80 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
              ))}
            </HeroSlider>
          </div>
      {/*for laptop screen*/} 
           <div className="hidden lg:block">
           <HeroSlider {...settingsLG}>
              {images.map((image) => (
              <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
              ))}
           </HeroSlider>
           </div>
        </>
    )
};

export default HeroCarousel;