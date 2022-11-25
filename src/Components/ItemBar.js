import React from "react";
function ItemBar(props) {
    return (
        <div className="w-4/5 h-[10%] px-5 pt-5 pb-10 duration-100 prodgrid" style={{ backgroundColor: props.color }}>
            <h1 className="font-[poppins] col-span-1" >{props.catno}</h1>
            <a href="/Products/pdf"><h1 className="font-[poppins] col-span-1" >{props.title}</h1></a>
            <h1 className="font-[poppins] col-span-1" >{props.qty}</h1>
            <h1 className="font-[poppins] col-span-1" >{props.price}</h1>
            <a href={props.link}><h1 className="font-[poppins] text-right duration-100 hover:text-lg hover:text-blue-500" >Download</h1></a>
        </div>

    );
}

export default ItemBar