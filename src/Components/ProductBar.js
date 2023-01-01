import React from "react";
import Img from '../Ui/PDF2.png'

function ProductBar(props) {
    return (
        <div className="w-4/5 h-[95%] px-10 py-6 my-3 duration-100  hover:w-[83%]" style={{ backgroundColor: props.color }}>
            <a href={props.page} className="flex justify-between">
                <h1 className="font-[poppins] font-extrabold text-4xl" >{props.title}</h1>
                <img src={Img} className="w-10 align-middle" alt="" />
            </a>
        </div>

    );
}

export default ProductBar