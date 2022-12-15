import React from "react";
import ItemCombinedFlu from "../Components/Category/ItemCombinedFluorescentDyesAndQuenchers";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top from "../Components/top";

function Flu() {
    return (
        <div>
            <Top/>
            <ItemTitle title="Fluorescent Dyes/Quencher" />
            <ItemCombinedFlu />
            <FooterOutside />
        </div>
    )
}

export default Flu;