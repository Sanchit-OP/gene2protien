import React from "react";
import ItemCombinedModify from "../Components/Category/ItemCombinedModifyingEnzymes";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Modify() {
    return (
        <div>
            <Top2 color="#fdc689"/>
            <ItemTitle title="Modifying Enzymes" />
            <ItemCombinedModify />
            <FooterOutside />
        </div>
    )
}

export default Modify;