import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import ItemCombinedRNA from "../Components/Category/ItemCombinedRNA-cDNA Synthesis Range";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function RNA() {
    return (
        <div>
            <Top2 color="#C8C2A5" />
            <ItemTitle title="RNA Range" />
            <ItemCombinedRNA />
            <FooterOutside />
        </div>
    )
}

export default RNA;