import React from "react"
import ResponsiveMenu2 from './ResponsiveMenu2';

export default function Top2(props){
    return(
        <div style={{ backgroundColor: props.color }}>
            <ResponsiveMenu2 />
            <div className="hidden md:block" >
                <div className="xl:mx-56 pt-10 mx-40 pb-4">
                    <div className="font-bold text-5xl  black">Hamara Vigyan Hamara Swabhiman</div>
                </div>
            </div>
        </div>
    );
}