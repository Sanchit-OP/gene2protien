import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedRNA from "../Components/Category/ItemCombinedRNA-cDNA Synthesis Range";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function RNA() {
    return (
        <div>
            <Top/>
            <ItemTitle title="RNA Range" />
            <ItemCombinedRNA />
            <FooterOutside />
        </div>
    )
}

export default RNA;