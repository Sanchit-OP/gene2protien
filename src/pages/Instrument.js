import React from "react";
import ItemCombinedInstrument from "../Components/Category/ItemCombinedInstruments";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Instrument() {
    return (
        <div>
            <Top2 color="#bc8cbf" />
            <ItemTitle title="Instruments" />
            <ItemCombinedInstrument />
            <FooterOutside />
        </div>
    )
}

export default Instrument;