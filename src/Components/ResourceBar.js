import React from "react";
import img from "../Ui/PDF2.png"

function ResourceBar(props) {
    return (
        <a href={props.page} className="w-[95%] md:w-[48%] h-[75%] px-10 py-6 my-3 duration-100 hover:border-solid hover:border-2 hover:border-black" style={{ backgroundColor: props.color }}>
            <div className="flex justify-between">
                <a href={props.page}>
                    <h1 className="font-[poppins] font-bold text-xl" >{props.title}</h1>
                </a>
                <img className="w-8 " src={img} />
            </div>
        </a>

    );
}

export default ResourceBar