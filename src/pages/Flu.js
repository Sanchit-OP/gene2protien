import React from "react";
import ItemCombinedFlu from "../Components/Category/ItemCombinedFluorescentDyesAndQuenchers";
import ItemCombinedPCREnzymes from "../Components/Category/ItemCombinedPCREnzymes";
import FooterOutside from "../Components/FooterOutside";
import ItemTitle from "../Components/ItemTitle";
import Top2 from "../Components/top2";

function Flu() {
    return (
        <div>
            <Top2 color="#f49ac1" />
            <ItemTitle title="Fluorescent Dyes/Quencher" />
            <ItemCombinedFlu />
            <FooterOutside />
        </div>
    )
}

export default Flu;