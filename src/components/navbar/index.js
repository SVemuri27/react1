import React from "react";
const Navbar = () => {
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
export default navbar;