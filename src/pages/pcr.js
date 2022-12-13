import React from "react";
import FooterOutside from "../Components/FooterOutside";
import ItemCombined from "../Components/ItemCombined";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function PCR() {
    return (
        <div>
            <Top/>
            <ItemTitle title="PCR Enzymes and Dyes" />
            <ItemCombined />
            <FooterOutside />
        </div>
    )
}

export default PCR