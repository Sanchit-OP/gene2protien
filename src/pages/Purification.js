import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedPurify from "../Components/Category/ItemCombinedPurificationRange";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Purification() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Purification Products" />
            <ItemCombinedPurify />
            <FooterOutside />
        </div>
    )
}

export default Purification;