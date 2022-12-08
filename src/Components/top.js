import React from "react"
import ResponsiveMenu from './ResponsiveMenu';

export default function Top(props){
    return(
        <div>
            <ResponsiveMenu />
            <div className="hidden md:block" >
                <div className="xl:mx-56 pt-10 mx-40 pb-4">
                    <div className="font-bold text-5xl  d-blue">Hamara Vigyan Hamara Swabhiman</div>
                </div>
            </div>
        </div>
    );
}