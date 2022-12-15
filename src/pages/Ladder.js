import React from "react";
import ItemCombinedLadder from "../Components/Category/ItemCombinedLaddersDNA&Cells";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Ladder() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Ladders/Markers" />
            <ItemCombinedLadder />
            <FooterOutside />
        </div>
    )
}

export default Ladder;