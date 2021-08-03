import React, { useState, useEffect }  from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";

//import css files in app.js to access it globaly its optional


const HeroCarousel = () => {
//hooks needed to be write on the top
  const [images,setImages] = useState([]);

  useEffect(() => {
    const requestNowPlaingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing")
      setImages(getImages.data.results);
    };
    requestNowPlaingMovies();
  }, []);


    const settingsLG = {
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "300px",
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
      };
      const settings = {    
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
 
    return (
      // for mobile and tab screen
        <>
          <div className="lg:hidden">
            <HeroSlider {...settings}>
              {images.map((image) => (
              <div className="w-20 h-56 md:h-80 py-3">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
              </div>
              ))}
            </HeroSlider>
          </div>
      {/*for laptop screen*/} 
           <div className="hidden lg:block">
           <HeroSlider {...settingsLG}>
              {images.map((image) => (
              <div className="w-full h-96 px-2 py-3">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
              </div>
              ))}
           </HeroSlider>
           </div>
        </>
    )
};

export default HeroCarousel;