import React from "react";
import ItemCombinedBuffer from "../Components/Category/ItemCombinedBuffers&Solutions";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Buffers() {
    return (
        <div>
            <Top2 color="#9873bf" />
            <ItemTitle title="Buffers" />
            <div className="whitespace-nowrap overflow-scroll ">
            <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
            <ItemCombinedBuffer/>
            </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default Buffers;