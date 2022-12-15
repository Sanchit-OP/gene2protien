import React from "react";
import ItemCombinedLadder from "../Components/Category/ItemCombinedLaddersDNA&Cells";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Ladder() {
    return (
        <div>
            <Top2 color="BABBB1" />
            <ItemTitle title="Ladders/Markers" />
            <ItemCombinedLadder />
            <FooterOutside />
        </div>
    )
}

export default Ladder;