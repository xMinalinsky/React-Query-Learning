import React from "react";

const Navbar = ({setPage}) => {
    return ( 
        <nav>
            <button onClick={() => setPage('planet')}>Planets</button>
            <button onClick={() => setPage('people')}>People</button>
        </nav>
     );
}
 
export default Navbar;