import React from "react"

export default function Top(props){
    return(
        <div className="hidden md:flex text-3xl font-semibold justify-around" style={{ backgroundColor: props.color }}>
            HAMARA VIGYAN HAMARA SWABHIMAN
        </div>
    );
}