import React from "react";
import ItemCombinedModify from "../Components/Category/ItemCombinedModifyingEnzymes";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Modify() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Modifying Enzymes" />
            <ItemCombinedModify />
            <FooterOutside />
        </div>
    )
}

export default Modify;