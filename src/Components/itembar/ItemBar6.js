import React from "react";
import pdfimg from "../../Ui/PDF.png"

function ItemBar6(props) {
    return (
        <div className="w-4/5 h-[10%] px-5 pt-5 pb-12 duration-100 grid grid-flow-col grid-cols-10" style={{ backgroundColor: props.color }}>
            {/* lot of changes */}
            <h1 className="font-bold col-span-2" >{props.catno}</h1>
            <h1 className="font-bold ml-10 col-span-5" >Compli-Amp<sup>TM</sup> One-Step RT-PCR Kit</h1>
            <h1 className="font-bold font-[poppins] col-span-2" >{props.qty}</h1>
            <a href={props.down} className="  col-span-1">
                <img className="w-[25%] mt-[-4px]" src={pdfimg}>
                </img>
                </a>

        </div>

    );
}

export default ItemBar6