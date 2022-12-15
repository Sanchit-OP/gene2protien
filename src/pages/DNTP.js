import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedDNPT from "../Components/Category/ItemCombined_dNTP";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function DNTP() {
    return (
        <div>
            <Top2 color="#ADB3BE" />
            <ItemTitle title="DNPTs" />
            <ItemCombinedDNPT />
            <FooterOutside />
        </div>
    )
}

export default DNTP;