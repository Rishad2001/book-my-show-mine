import React from 'react'
import Slider from 'react-slick';

//component
import Poster from '../poster/poster.component';

//config
import PosterCaroselsettings from '../../config/PosterCarousel.config';

export const PosterSlider = (props) => {
  const sliderConfig = props.config ? props.config : PosterCaroselsettings;
    return (
        <>
      <div className="flex flex-col items-start">
        <h3 className={` text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className={`text-white text-sm  ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
      </div>
        <Slider { ...sliderConfig }>
          {props.images.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
        </>
    )
}

export default  PosterSlider;