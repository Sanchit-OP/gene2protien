import ProductBar from "../ProductBar";

function ServiceCombined() {
    return (
        <div className="grid place-items-center  pb-[10%]" style={{ backgroundColor: "white" }}>
            <ProductBar color="#f69679" page="/Services/Custom_Gene"  title="Custom Gene Synthesis" />
            <ProductBar color="#f9ad81" page="/Services/Site_Directed"  title="Site Directed Mutagenesis" />
            <ProductBar color="#fdc689" page="/Services/Peptide"  title="Custom Peptide Synthesis" />
            <ProductBar color="#fff799" page="/Services/Custom_AntiBody"  title="Custom Antibody Development" />
            <ProductBar color="#c4df9b" page="/Services/Recombinant"  title="Recombinant Protein Expression" />
            <ProductBar color="#7da7d9" page="/Services/PrimerService"  title="Primer Synthesis" />
            <ProductBar color="#798cc9" page="/Services/Protein"  title="Protein Crystallization" />
        </div>
    );
}

export default ServiceCombined;