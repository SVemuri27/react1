import React from "react";
const Navbarcomponents = () => {
    return (
        <>
            <Nav>
              
                <NavMenu>
                    <NavLink
                        to="/"
                        activeStyle={{ color: 'black' }}
                    >Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{ color: 'black' }}
                    >
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbarcomponents;