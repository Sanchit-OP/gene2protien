import React from "react";
import ItemCombinedFlu from "../Components/Category/ItemCombinedFluorescentDyesAndQuenchers";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Flu() {
    return (
        <div>
            <Top2 color="#f49ac1" />
            <ItemTitle title="Fluorescent Dyes/Quencher" />
            <div className="whitespace-nowrap overflow-scroll ">
      <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedFlu />
            </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default Flu;