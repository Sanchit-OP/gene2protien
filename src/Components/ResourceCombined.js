import ResourceBar from "./ResourceBar";

function ResourceCombined() {
    return (
        <div className="grid place-items-center  pb-[10%]" style={{ backgroundColor: "white" }}>
            <ResourceBar color="#f69679" page="/products/pcr" title="PCR Enzymes and Dyes" />
            <ResourceBar color="#f9ad81" page="/products/restriction" title="Restriction Enzymes" />
            <ResourceBar color="#fdc689" page="/products/modifying" title="Modifying Enzymes" />
            <ResourceBar color="#fff799" page="/products/purification" title="Purification products" />
            <ResourceBar color="#c4df9b" page="/products/rna" title="RNA range" />
            <ResourceBar color="#82ca9c" page="/products/ladder" title="Ladders/Markers" />
            <ResourceBar color="#7da7d9" page="/products/Dntps" title="DNTPs" />
            <ResourceBar color="#798cc9" page="/products/primers" title="Primers" />
            <ResourceBar color="#9873bf" page="/products/buffers" title="Buffers" />
            <ResourceBar color="#bc8cbf" page="/products/instrument" title="Instruments" />
            <ResourceBar color="#f49ac1" page="/products/flur" title="Fluorescent Dyes/Quencher" />
        </div>
    );
}

export default ResourceCombined