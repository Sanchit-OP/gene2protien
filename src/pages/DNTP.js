import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedDNPT from "../Components/Category/ItemCombined_dNTP";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function DNTP() {
    return (
        <div>
            <Top2 color="#7da7d9" />
            <ItemTitle title="DNPTs" />
            <div className="whitespace-nowrap overflow-scroll ">
      <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedDNPT />
            </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default DNTP;