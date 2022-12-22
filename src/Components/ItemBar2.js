import React from "react";
import pdfimg from "../Ui/PDF.png"

function ItemBar2(props) {
    return (
        <div className="w-4/5 h-[10%] px-5 pt-5 pb-12 duration-100 grid grid-flow-col grid-cols-10" style={{ backgroundColor: props.color }}>
            {/* lot of changes */}
            <h1 className="font-bold col-span-2" >{props.catno}</h1>
            <h1 className="font-bold ml-10 col-span-5" >{props.title}</h1>
            <h1 className="font-bold font-[poppins] col-span-2" >{props.qty}</h1>
            

        </div>

    );
}

export default ItemBar2;