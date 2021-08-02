import React from 'react'

//component
import Poster from '../components/poster/poster.component';
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                {/*for right hand side */}
                <div className="w-full lg:flex flex-row-reverse">
                   <div className="lg:w-3/4">
                   <h2 className="text-2xl font-bold">Play in Bangelore</h2>
                    <div className="flex flex-wrap my-3 ">
                       <div className="w-1/2 md:w-1/3 lg:w-3/12">
                       <Poster 
                          src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bandvalvillada-badayi-0-2021-7-30-t-18-19-54.jpg"
                          title="play poster"
                          subtitle="telugu $ > 40"
                          className="w-full h-full"
                        />                       
                          </div>

                          <div className="w-1/2 md:w-1/3 lg:w-3/12">
                       <Poster 
                          src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bandvalvillada-badayi-0-2021-7-30-t-18-19-54.jpg"
                          title="play poster"
                          subtitle="telugu $ > 40"
                          className="w-full h-full"
                        />                       
                          </div>

                      <div className="w-1/2 md:w-1/3 lg:w-3/12">
                       <Poster 
                          src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bandvalvillada-badayi-0-2021-7-30-t-18-19-54.jpg"
                          title="play poster"
                          subtitle="telugu $ > 40"
                          className="w-full h-full"
                        />                       
                      </div>

                      <div className="w-1/2 md:w-1/3 lg:w-3/12">
                       <Poster 
                          src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bandvalvillada-badayi-0-2021-7-30-t-18-19-54.jpg"
                          title="play poster"
                          subtitle="telugu $ > 40"
                          className="w-full h-full"
                        />                       
                      </div>

                    </div>
                   </div>
                
                
                {/* for left hand side */}
                <div className="lg:w-3/12 ">
                   <h2 className="text-2xl font-bold mb-4">Filters</h2>
                   <div>
                       <PlaysFilter title="Date" tags={["today", "tomorrow", "this weekend"]} />
                   </div>
                   <div>
                       <PlaysFilter title="Language" tags={["malayalam", "english", "chineese"]} />
                   </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default Plays;
