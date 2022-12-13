import React from "react";
function ItemBar(props) {
    return (
        <div className="w-4/5 h-[10%] px-5 pt-5 pb-10 duration-100 grid grid-flow-col grid-cols-10" style={{ backgroundColor: props.color }}>
            {/* lot of changes */}
            <h1 className="col-span-2" >{props.catno}</h1>
            <h1 className=" col-span-5" >{props.title}</h1>
            <h1 className="font-[poppins] col-span-1" >{props.qty}</h1>
            <a href={props.down} className=" text-center overflow-hidden border border-black col-span-2"><h1 className=" " >Download</h1></a>

        </div>

    );
}

export default ItemBar