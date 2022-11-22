import React from "react";
function ItemBar(props) {
    return (
        <div className="w-4/5 h-[10%] px-5 pt-5 pb-10 duration-100 grid grid-flow-col grid-cols-4" style={{ backgroundColor: props.color }}>
            <a href="/Products/pdf"><h1 className="font-[poppins]" >{props.title}</h1></a>
            <h1 className="font-[poppins]" >{props.catno}</h1>
            <h1 className="font-[poppins]" >{props.qty}</h1>
            <h1 className="font-[poppins]" >{props.price}</h1>
            <a href="https://drive.google.com/file/d/1Py-7eKDfQuQZhj6bYtql3afiIwSheZ-Z/view"><h1 className="font-[poppins] px-1 border border-black" >Download</h1></a>
        </div>

    );
}

export default ItemBar