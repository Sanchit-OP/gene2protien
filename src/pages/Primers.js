import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedPrimer from "../Components/Category/ItemCombinedPrimers";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Primers() {
    return (
        <div>
            <Top2 color="#9FACCA" />
            <ItemTitle title="Primers" />
            <ItemCombinedPrimer />
            <FooterOutside />
        </div>
    )
}

export default Primers;