import React from "react";
import ItemCombinedRestriction from "../Components/Category/ItemCombinedRestrictionEnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Restriction() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Restriction enzymes" />
            <ItemCombinedRestriction />
            <FooterOutside />
        </div>
    )
}

export default Restriction;