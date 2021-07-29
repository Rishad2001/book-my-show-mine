import React from "react";
import { Route } from "react-router";

//Layout
import MovieLayout from "../layoouts/Movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <>
          <Route 
            {...rest}
            component={(props) => (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )
            }
          />
        </>
    )
};

export default MovieHOC;


// ... for spreading

// jsxil taginte ullil aavumbol arrow functionille simple bracket mathi eg => ()