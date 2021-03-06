import React, {useContext} from 'react'

import Movieinfo from './Movieinfo.component'

//context 
import  { MovieContext }  from '../../context/movie.context';

const MovieHero = () => {

    const { movie } = useContext(MovieContext)
    return (
        <>
           <div>
               {/* mobile */}
              <div className=" relative md:hidden wd-full" style={{ height: "calc(180vw)"}}>

                  <div className="absolute z-20 bottom-9 left-4">
                      <Movieinfo />
                  </div>
                  <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                 <img 
                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt="poster"
                 className="w-full h-full"
                 />
              </div>
              {/* tablet */}
              <div className="relative hidden md:block w-full lg:hidden" style={{ height: "calc(100vw)"}}>
                  
              <div className="absolute z-20 bottom-9 ">
                      <Movieinfo />
                  </div>
                <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                <img 
                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt="poster"
                 className="w-full h-full"
               /> 
              </div>
              {/* large */}
              <div className="relative hidden lg:block" style={{height:"29rem"}}>
                  <div className="absolute h-full z-10 w-full" style={{backgroundImage: 
                    "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%"}} />
                  
                <div className="absolute left-24 top-10  z-30 flex items-center gap-10">
                  <div className=" w-64 h-96">
                      <img 
                       src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                       alt="poster" 
                       className="w-full h-full rounded-xl"
                      />
                  </div>
                  <div>
                      <Movieinfo />
                  </div>
                </div>
              <img 
                 src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                 alt="poster"
                 className="w-full h-full"
               /> </div>   
            </div>            
        </>
    )
}

export default MovieHero
