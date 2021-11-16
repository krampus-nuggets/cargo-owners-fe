import React from "react";

const Section = ({ children, background }) => {
    return (
        <div className={ `w-full h-screen ${ (background) ? 'bg-gray-300' : 'bg-white' }` }>
            { children }
        </div>
    );
}

export default Section;