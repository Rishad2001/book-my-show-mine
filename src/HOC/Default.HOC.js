import React from "react";
import { Route } from "react-router";

//Layout
import DefaultLayout from "../layoouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <>
          <Route 
            {...rest}
            component={(props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )
            }
          />
        </>
    )
};

export default DefaultHOC;


// ... for spreading

// jsxil taginte ullil aavumbol arrow functionille simple bracket mathi eg => ()