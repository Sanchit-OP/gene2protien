import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";

export default function Cgene() {
  return (
    <div className="bg-white">
      <Top2 color="#f69679" />
      <Title data="Custom Gene Synthesis" color="#f69679"/>
      <DarkText data="Why waste time cloning and sequencing your gene when we do it all for you!" />
      <DarkText data="We have partnered with Genscript, the world leader in Gene synthesis technology to provide you unmatched service for synthesizing your genes in India." />

      <div className="font-semibold text-xl p-10 md:ml-14">
        Gene Synthesis service features:
      </div>
      <div className="font-normal px-10 pb-10 mb-10 md:ml-32 leading-9">
        <ul className="list-disc">
          <li>Codon optimization.</li>
          <li>
            Insertion of gene into a standard vectors like pUC are done at no
            additional charge.
          </li>
          <li>
            Insertion into, vector of choice at extra charge. Client to supply
            destination vector
          </li>
          <li>DNA sequencing data and chromatogram will be provided.</li>
          <li>Final product will be delivered as lyophilized plasmid DNA.</li>
          <li>Optional: E.coli culture stab.</li>
          <li>
            Confidentiality through a non-disclosure agreement (if necessary).
          </li>
          <li>
            Expression systems: Bacterial (E.coli), Yeast (Pichia pastoris)
          </li>
          <li>Baculovirus (Insect Cell), Mammalian (Mouse).</li>
          <li>
            Complex genes can be appropriately handled- GC rich regions,
            repeats, long genes are 100% accurate
          </li>
          <li>
            Downstream services like cloning, mutagenesis, plasmid prep and
            protein expression evaluation&nbsp;can be done for additional
            charge.
          </li>
        </ul>
      </div>
      <LightText data="We guarantee a quick turnaround-time, unbeatable pricing and large inserts!!!" />
      <LightText data="We provide unparalleled technical support right from the time you send us the gene sequence till we send it to the synthesizer for synthesis. We pride ourselves in checking each and every gene for start and stop sites, restriction enzyme sites to be added for cloning, in frame ORF for protein expression, His-tag suggestion if required and much more!" />
      <FooterOutside />
    </div>
  );
}
