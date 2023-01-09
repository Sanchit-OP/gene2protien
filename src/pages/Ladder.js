import React from "react";
import ItemCombinedLadder from "../Components/Category/ItemCombinedLaddersDNA&Cells";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Ladder() {
    return (
        <div>
            <Top2 color="#82ca9c" />
            <ItemTitle title="Ladders/Markers" />
            <div className="whitespace-nowrap overflow-scroll ">
      <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
        
            <ItemCombinedLadder />
            </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default Ladder;