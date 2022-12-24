import { useState } from "react";

function ItemTitle(props) {

    return (
        <div className="grid place-items-center py-20 " style={{ backgroundColor: "white" }}>
            <h1 className="font-[poppins] font-extrabold text-6xl ">{props.title}</h1>
            <h1 className="font-[poppins] font-extrabold text-4xl opacity-50">{props.cat}</h1>

        </div>
    );
}

export default ItemTitle