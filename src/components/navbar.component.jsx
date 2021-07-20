import React from "react";

const NavSm = () => {};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
    return (
    <>
       <navbar>
           <div className="md:hidden">{/*for mobile device*/}</div>
           <div className = "hidden md:flex lg:hidden">{/*for tab*/}{""}
           </div>
           <div className = "hidden lg:flex">
               {/* for pc*/}
           </div>
       </navbar>
    </>
   );
};

export default Navbar;