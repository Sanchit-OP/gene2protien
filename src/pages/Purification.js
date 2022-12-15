import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedPurify from "../Components/Category/ItemCombinedPurificationRange";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Purification() {
    return (
        <div>
            <Top2 color="#D6CA98"/>
            <ItemTitle title="Purification Products" />
            <ItemCombinedPurify />
            <FooterOutside />
        </div>
    )
}

export default Purification;