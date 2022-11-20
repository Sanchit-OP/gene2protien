import ProductBar from "./ProductBar";

function ProductCombined() {
    return (
        <div className="grid place-items-center h-screen" style={{ backgroundColor: "white" }}>
            <ProductBar color="#A6D8B5" title="Restriction Enzymes" />
            <ProductBar color="#A1D2BD" title="dNTP" />
            <ProductBar color="#98CBC6" title="Instruments" />
            <ProductBar color="#93C5CE" title="Modifying Enzymes" />
            <ProductBar color="#8CBED7" title="PCR Enzymes and Dyes" />
        </div>
    );
}

export default ProductCombined