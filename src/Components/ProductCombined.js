import ProductBar from "./ProductBar";

function ProductCombined() {
    return (
        <div className="grid place-items-center h-screen pb-[10%]" style={{ backgroundColor: "white" }}>
            <ProductBar color="#A6D8B5" title="PCR Enzymes and Dyes" />
            <ProductBar color="#A1D2BD" title="dNTP" />
            <ProductBar color="#98CBC6" title="Instruments" />
            <ProductBar color="#93C5CE" title="Modifying Enzymes" />
            <ProductBar color="#8CBED7" title="Restriction Enzymes" />
        </div>
    );
}

export default ProductCombined