import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";

export default function SiteDirected() {
  return (
    <div className="bg-white">
      <Top2 color="#f9ad81" />
      <Title data="Site Directed Mutagenesis" color="#f9ad81"/>
      <DarkText data="Why waste spending your time and money on mutagenesis kits for PCR mutagenesis, cloning and sequencing in your lab?" />
      <LightText
        data="Our Site Directed mutagenesis (SDM) service provides a fail-safe approach to obtain mutant constructs (including point mutations, deletion mutations, and insertion mutations) quickly with 100% accuracy, eliminating the possibility of undesired mutations in your gene of interest.
        SDM service enables researchers in field of DNA-protein interactions, protein structure/function, study of active sites of enzymes, modifications in regulatory sequences to alter gene expression and to construction of fusion, tagged proteins or knockouts."
      />    
      <LightText data="Mutations on Large DNA Constructs: Our technology is optimized to introduce point mutations, insertion mutations, and deletion mutations on constructs as large as 12 kb." />
      <LightText data="The fastest and usually the most cost-effective, way to get the mutant DNA constructs you need is to order the Mutagenesis service bundled with Gene synthesis. However you are welcome to submit your own DNA templates for mutagenesis." />
      <div className="font-semibold text-xl p-10 md:ml-14">
        Deliverables:
      </div>
      <div className="font-normal px-10 pb-10 md:ml-32 leading-9">
        <ul className="list-disc">
            <li> 4 μg lyophilized destination vector containing the gene</li>
            <li>Sequence chromatograms covering target gene</li>
            <li>Construct map for the plasmid</li>
            <li>Quality assurance certificate</li>
        </ul>
      </div>

      <LightText data="One mutation is defined as any combination of base changes within a 30-base frame." />
      <FooterOutside />
    </div>
  );
}
