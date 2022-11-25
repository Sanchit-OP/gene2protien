import React from "react"
import ResponsiveMenu from './ResponsiveMenu';

export default function Top(props){
    return(
        <div>
            <ResponsiveMenu />
            <div className="hidden md:flex text-3xl font-semibold justify-around" style={{ backgroundColor: props.color }}>
                <div className="flex justify-evenly">
                    <div className="mx-[8%] d-blue font-bold">HAMARA</div>
                    <div className="mx-[8%] d-blue font-bold">VIGYAN</div>
                    <div className="mx-[8%] d-blue font-bold">HAMARA </div>
                    <div className="mx-[8%] d-blue font-bold">SWABHIMAN</div>        </div>
            </div>
        </div>
    );
}