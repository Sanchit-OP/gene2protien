import React from "react";
import ItemCombinedModify from "../Components/Category/ItemCombinedModifyingEnzymes";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Modify() {
    return (
        <div>
            <Top2 color="#fdc689"/>
            <ItemTitle title="Modifying Enzymes" />
            <div className="whitespace-nowrap overflow-scroll ">
      <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedModify />
            </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default Modify;