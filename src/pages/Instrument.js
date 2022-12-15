import React from "react";
import ItemCombinedInstrument from "../Components/Category/ItemCombinedInstruments";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Instrument() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Instruments" />
            <ItemCombinedInstrument />
            <FooterOutside />
        </div>
    )
}

export default Instrument;