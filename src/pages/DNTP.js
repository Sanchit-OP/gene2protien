import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedDNPT from "../Components/Category/ItemCombined_dNTP";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function DNTP() {
    return (
        <div>
            <Top/>
            <ItemTitle title="DNPTs" />
            <ItemCombinedDNPT />
            <FooterOutside />
        </div>
    )
}

export default DNTP;