import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div id="root" className="w-full">
            <NavBar />
            { children }
        </div>
    );
}

export default Layout;