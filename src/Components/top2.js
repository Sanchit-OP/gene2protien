import React from "react"
import ResponsiveMenu2 from './ResponsiveMenu2';

export default function Top2(props){
    return(
        <div style={{ backgroundColor: props.color }}>
            <ResponsiveMenu2 />
            <div className="hidden items-center md:block" >
                <div className="xl:mx-56 pt-10 items-center mx-40 pb-4">
                    <div className="pb-2 font-bold text-5xl text-center black">"Hamara Vigyan Hamara Swabhiman"</div>
                </div>
            </div>
        </div>
    );
}