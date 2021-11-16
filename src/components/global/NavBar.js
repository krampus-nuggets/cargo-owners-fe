import React from "react";
import UserGreeting from "./UserGreeting";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <section  className="h-14 bg-black relative">
            <div className="h-full max-w-screen-2xl xl:max-w-screen-lg mx-auto">
                <div className="grid grid-cols-2 w-full h-full">
                    <div className="flex items-center">
                        <Link to="/">
                            <span className="font-bold py-1 px-2 bg-white">
                                CARGO OWNERS
                            </span>
                        </Link>
                    </div>
                    <div className="w-full">
                        <UserGreeting />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavBar;