import ProductBar from "./ProductBar";

function ProductCombined() {
    return (
        <div className="grid place-items-center  pb-[10%]" style={{ backgroundColor: "white" }}>
            <ProductBar color="#FFE173" page="/products/pcr"  title="PCR Enzymes and Dyes" />
            <ProductBar color="#F2CD7D" page="/products/restriction"  title="Restriction Enzymes" />
            <ProductBar color="#E4BA88" page="/products/modifying"  title="Modifying Enzymes" />
            <ProductBar color="#D6A692" page="/products/purification"  title="Purification products" />
            <ProductBar color="#C7929C" page="/products/rna"  title="RNA range" />
            <ProductBar color="#BB7EA7" page="/products/ladder"  title="Ladders/Markers" />
            <ProductBar color="#AD6BB2" page="/products/Dntps"  title="DNTPs" />
            <ProductBar color="#A058BC" page="/products/primers"  title="Primers" />
            <ProductBar color="#9144C6" page="/products/buffers"  title="Buffers" />
            <ProductBar color="#8430D0" page="/products/instrument"  title="Instruments" />
            <ProductBar color="#771EDC" page="/products/flur"  title="Fluorescent Dyes/Quencher" />
        </div>
    );
}

export default ProductCombined