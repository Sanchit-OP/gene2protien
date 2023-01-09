import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedRNA from "../Components/Category/ItemCombinedRNA-cDNA Synthesis Range";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function RNA() {
    return (
        <div>
            <Top2 color="#c4df9b" />
            <ItemTitle title="RNA Range" />
            <div className="whitespace-nowrap overflow-scroll ">
            <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedRNA />
            </div>
            </div>

            <FooterOutside />
        </div>
    )
}

export default RNA;