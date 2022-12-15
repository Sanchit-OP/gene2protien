import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function PCR() {
    return (
        <div>
            <Top/>
            <ItemTitle title="PCR Enzymes and Dyes" />
            <ItemCombinedPCREnzymes />
            <FooterOutside />
        </div>
    )
}

export default PCR