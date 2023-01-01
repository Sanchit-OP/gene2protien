import React from "react";
import Img from '../Ui/PDF2.png'

function ProductBar(props) {
    return (
        <div className="w-[48%] h-[75%] px-10 py-6 my-3 duration-100 hover:border-solid hover:border-2 hover:border-black" style={{ backgroundColor: props.color }}>
            <a href={props.page} className="flex justify-between">
                <h1 className="font-[poppins] font-bold text-2xl" >{props.title}</h1>
                <img src={Img} className="w-8 align-middle" alt="" />
            </a>
        </div>

    );
}

export default ProductBar