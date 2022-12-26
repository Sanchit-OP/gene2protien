import React from "react"
import ResponsiveMenu from './ResponsiveMenu';

export default function Top1(props){
    return(
        <div style={{ backgroundColor: props.color }}>
            <ResponsiveMenu />
            <div className="hidden md:block" >
                <div className="xl:mx-56 pt-10 mx-40 pb-4">
                    <div className="font-bold text-center text-5xl  d-blue">Hamara Vigyan Hamara Swabhiman</div>
                </div>
            </div>
        </div>
    );
}