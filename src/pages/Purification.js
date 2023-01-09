import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedPurify from "../Components/Category/ItemCombinedPurificationRange";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Purification() {
    return (
        <div>
            <Top2 color="#fff799"/>
            <ItemTitle title="Purification Products" />
            <div className="whitespace-nowrap overflow-scroll ">
      <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedPurify />
            </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default Purification;