import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedPrimer from "../Components/Category/ItemCombinedPrimers";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Primers() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Primers" />
            <ItemCombinedPrimer />
            <FooterOutside />
        </div>
    )
}

export default Primers;