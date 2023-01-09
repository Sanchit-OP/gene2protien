import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedPrimer from "../Components/Category/ItemCombinedPrimers";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Primers() {
    return (
        <div>
            <Top2 color="#798cc9" />
            <ItemTitle title="Primers" />
            <div className="whitespace-nowrap overflow-scroll ">
      <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedPrimer />
            </div>
            </div>
            
            <FooterOutside />
        </div>
    )
}

export default Primers;