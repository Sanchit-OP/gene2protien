import ProductBar from "./ProductBar";

function ProductCombined() {
    return (
        <div className="grid place-items-center  pb-[10%]" style={{ backgroundColor: "white" }}>
            <ProductBar color="#f69679" page="/products/pcr"  title="PCR Enzymes and Dyes" />
            <ProductBar color="#f9ad81" page="/products/restriction"  title="Restriction Enzymes" />
            <ProductBar color="#fdc689" page="/products/modifying"  title="Modifying Enzymes" />
            <ProductBar color="#fff799" page="/products/purification"  title="Purification products" />
            <ProductBar color="#c4df9b" page="/products/rna"  title="RNA range" />
            <ProductBar color="#82ca9c" page="/products/ladder"  title="Ladders/Markers" />
            <ProductBar color="#7da7d9" page="/products/Dntps"  title="DNTPs" />
            <ProductBar color="#798cc9" page="/products/primers"  title="Primers" />
            <ProductBar color="#9873bf" page="/products/buffers"  title="Buffers" />
            <ProductBar color="#bc8cbf" page="/products/instrument"  title="Instruments" />
            <ProductBar color="#f49ac1" page="/products/flur"  title="Fluorescent Dyes/Quencher" />
        </div>
    );
}

export default ProductCombined