import React from "react";
import { data } from "./Imagedata";
import './Slider.css';

function Slider(){
    return(
        <>
        <div>
            <h1>Our Projects</h1>
        </div>
        <div className="flex-img">
            <div className="style">
                {data.map((item) =>(
                    <img className="img-sty"  src={item.img} />
                ))}
            </div>
        </div>
        </>
    );

}
export default Slider;