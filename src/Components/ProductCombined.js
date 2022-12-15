import ProductBar from "./ProductBar";

function ProductCombined() {
    return (
        <div className="grid place-items-center  pb-[10%]" style={{ backgroundColor: "white" }}>
            <ProductBar color="#FFE173" page="/products/pcr"  title="PCR Enzymes and Dyes" />
            <ProductBar color="#F1D97F" page="/products/restriction"  title="Restriction Enzymes" />
            <ProductBar color="#E4D28C" page="/products/modifying"  title="Modifying Enzymes" />
            <ProductBar color="#D6CA98" page="/products/purification"  title="Purification products" />
            <ProductBar color="#C8C2A5" page="/products/rna"  title="RNA range" />
            <ProductBar color="#BABBB1" page="/products/ladder"  title="Ladders/Markers" />
            <ProductBar color="#ADB3BE" page="/products/Dntps"  title="DNTPs" />
            <ProductBar color="#9FACCA" page="/products/primers"  title="Primers" />
            <ProductBar color="#91A4D7" page="/products/buffers"  title="Buffers" />
            <ProductBar color="#839CE3" page="/products/instrument"  title="Instruments" />
            <ProductBar color="#688DFC" page="/products/flur"  title="Fluorescent Dyes/Quencher" />
        </div>
    );
}

export default ProductCombined