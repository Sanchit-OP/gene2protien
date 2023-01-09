import { useState } from "react";

function ItemTitle(props) {
  return (
    <div >
      <div
        className=" place-items-center py-20 hidden md:grid"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="font-[poppins] font-extrabold text-6xl ">
          {props.title}
        </h1>
        <h1 className="font-[poppins] font-extrabold text-4xl opacity-50">
          {props.cat}
        </h1>
      </div>
      <div
        className="grid place-items-center py-20 md:hidden"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="font-[poppins] font-bold text-3xl ">
          {props.title}
        </h1>
        <h1 className="font-[poppins] font-extrabold text-4xl opacity-50">
          {props.cat}
        </h1>
      </div>
    </div>
  );
}

export default ItemTitle;
