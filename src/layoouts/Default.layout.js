import React from "react";

const DefaultLayout = (props) => {
    return (
    <>
        <h1 className="text-xl">DefaultLayout</h1>
        {props.children}
    </>
    );
};

export default DefaultLayout;

//  {props.children} is important