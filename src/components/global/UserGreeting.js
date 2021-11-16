import React from "react";

const UserGreeting = () => {
    return (
        <div className="h-full flex flex-row float-right">
            <div className="flex items-center">
                <img className="rounded-full h-10 bg-white" src="https://robohash.org/geoff.png" alt="project-repository-icon" />
            </div>
            <div className="flex items-center float-right">
                <span className="font-bold p-1 ml-2 text-white">
                    Welcome back, Jack!
                </span>
            </div>
        </div>
    );
}

export default UserGreeting;