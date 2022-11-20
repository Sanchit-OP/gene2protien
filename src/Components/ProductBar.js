import React from "react";

function ProductBar(props) {
    return (
        <div className="w-4/5 h-[95%] px-10 py-6 my-3 duration-100 hover:w-[83%]" style={{ backgroundColor: props.color }}>
            <h1 className="font-[poppins] font-extrabold text-4xl" >{props.title}</h1>
        </div>
    );
}

export default ProductBar