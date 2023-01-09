import React from "react";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function PCR() {
    return (
        <div>
            <Top2 color="#f69679" />
            <ItemTitle title="PCR Enzymes and Dyes" />
            <div className="whitespace-nowrap overflow-scroll ">
                <div className="ml-[-100px] md:ml-0 w-[300%] md:w-[100%] ">
                    <ItemCombinedPCREnzymes />
                </div>
            </div>
            <FooterOutside />
        </div>
    )
}

export default PCR