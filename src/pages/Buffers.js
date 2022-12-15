import React from "react";
import ItemCombinedBuffer from "../Components/Category/ItemCombinedBuffers&Solutions";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Buffers() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Buffers" />
            <ItemCombinedBuffer/>
            <FooterOutside />
        </div>
    )
}

export default Buffers;