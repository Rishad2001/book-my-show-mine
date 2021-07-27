import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return(
        <>
           <div className="w-full h-30 px-2">
               <img 
                className="w-full h-full rounded-xl"
                src={props}
                src={props.src}
                alt="entertainment image" 
               />
            </div>  
        </>    
    );
};

const EntertainmentCardSlider = () => {

    const EntertainmentImage =[
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTk1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/adventure-collection-202010140844.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png",
    ];

    const settings = {
        Infinity:false,
        autoplay:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,

        responsive: [{
            breakpoints:1024,
            setting: {
                slidesToShow: 3,
                slidesToScroll:2,
                infinite: true,
            },
        },
        {
            breakpoints:768,
            setting: {
                slidesToShow: 2,
                slidesToScroll:1,
                InitialSlide: 1,
            }, 
        },
        {
            breakpoints:480,
            setting: {
                slidesToShow: 2,
                slidesToScroll:1,
            }, 
        },      
    ],

    };

    return (
        <>
          <Slider {...settings}>
              {EntertainmentImage.map((image) => (
                  <EntertainmentCard src={image} />
              ))}
          </Slider>
        </>
    )
};

export default EntertainmentCardSlider;