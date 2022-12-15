import React from "react";
import ItemCombinedBuffer from "../Components/Category/ItemCombinedBuffers&Solutions";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Buffers() {
    return (
        <div>
            <Top2 color="#91A4D7" />
            <ItemTitle title="Buffers" />
            <ItemCombinedBuffer/>
            <FooterOutside />
        </div>
    )
}

export default Buffers;