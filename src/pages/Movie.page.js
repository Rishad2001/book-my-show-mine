import { FaCcVisa,FaCcApplePay } from "react-icons/fa"

//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        InitialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              InitialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <>
            <MovieHero />
            <div className="my-12 container  px-4  lg:w-2/3">
                <div className="flex flex-col item-start gap-3">
                 <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
                 <p>
                    Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
                 </p>
                 </div>
                 <div className="my-8">
                     <hr />
                 </div>
                 
                 <div className="my-8">
                     <h1 className="text-gray-800 font-bold text-2xl">Applicable offers</h1>
                     <div className="flex flex-col gap-3 lg:flex-row">
                         
                     <div className="flex items-start gap-2 bg-yellow-200 p-3 border-2 border-yellow-400 border-dashed rounded-md">
                     <div className="w-8 h-8">
                        <FaCcVisa className="w-full h-full text-blue-900" />
                     </div>
                     <div className="flex flex-col items-start">
                         <h3 className="text-gray-700 text-xl font-bold">Visa stream offer</h3>
                         <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                     </div>
                    </div>
                    
                    <div className="flex items-start gap-2 bg-yellow-200 p-3 border-2 border-yellow-400 border-dashed rounded-md">
                     <div className="w-8 h-8">
                        <FaCcApplePay className="w-full h-full text-red-900" />
                     </div>
                     <div className="flex flex-col items-start">
                         <h3 className="text-gray-700 text-xl font-bold">filmy show</h3>
                         <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                     </div>
                    </div>

                     </div>
                 </div>
                 <div className="my-8">
                 <div className="my-8">
                     <hr />
                 </div>
                 <h1 className="text-gray-800 font-bold text-2xl mb-2">cast &amp; crew</h1>

                 <div className="flex flex-wrap gap-4">
                 <Cast 
                     image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" 
                     castName="Ben Affleck" 
                     role="batman" />
                      <Cast 
                     image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" 
                     castName="Gal Gadot" 
                     role="wonder woman" />
                      <Cast 
                     image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg" 
                     castName="jasom Momoa" 
                     role="aquaman" />
                 </div>
                 </div>

                 <div className="my-8">
                 <PosterSlider 
                    config={settings}
                    images={TempPosters} 
                    title="You might also like"
                    isDark={false} 
            />
                 </div>
            </div>
        </>
    )
}
 export default  Movie;