import React from "react";
import ItemCombinedRestriction from "../Components/Category/ItemCombinedRestrictionEnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Restriction() {
    return (
        <div>
            <Top2 color="#F1D97F"/>
            <ItemTitle title="Restriction enzymes" />
            <ItemCombinedRestriction />
            <FooterOutside />
        </div>
    )
}

export default Restriction;