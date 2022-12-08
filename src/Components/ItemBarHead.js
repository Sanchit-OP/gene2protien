import React from "react";
function ItemBarHead(props) {
    const bord = "font-[poppins] px-1";
    if (props.isbord == "true") {
        bord = "font-[poppins] px-1 border border-black";
    }
    return (

        <div className="w-4/5 h-[10%] px-5 pt-5 pb-10 duration-100 grid grid-flow-col grid-cols-15" style={{ backgroundColor: props.color }}>
            <h1 className="font-[poppins] text-xl font-semibold col-span-3" >{props.catno}</h1>
            <h1 className="font-[poppins] text-xl font-semibold col-span-8" >{props.title}</h1>
            <h1 className="font-[poppins] text-xl font-semibold col-span-2 " >{props.qty}</h1>
            <h1 className="font-[poppins] text-xl font-semibold  col-span-2" >{props.price}</h1>
            <h1 className="font-[poppins] text-xl font-semibold px-1" >Download</h1>

        </div>

    );
}

export default ItemBarHead