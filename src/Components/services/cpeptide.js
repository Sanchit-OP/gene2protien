import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";

export default function Cpeptide() {
  return (
    <div className="bg-white">
      <Top2 color="#fdc689" />
      <Title color="#fdc689" data="Custom Peptide Synthesis" />
      <LightText data="Biotech Desk synthesizes locally in India as well as has tie-ups abroad to bring to the researcher quality custom peptides. State-of- the-art highly sophisticated instrumentation like the 400Hz NMR, FT-IR, MS, Amino Acid Analyzer, automated peptide synthesizers, analytical and preparative HPLC are employed for peptide synthesis. Our turnaround time for an average peptide is 3-4 weeks upon receiving an official order. Our prices are very competitive!" />
      <div className="font-normal px-10 pb-10 ml-10 md:ml-32 leading-9">
        <ul className="list-disc">
          <li>Phospho-peptides, Biotin-labeled peptides available.</li>
          <li>Cyclic peptide and those with D-amino acids available.</li>
          <li>Discount shall be applied for large-scale synthesis.</li>
          <li>
            Please mention amount (mg) and purity level (% purity) of the
            peptide required for a quote request.
          </li>
          <li>Conjugation to KLH or BSA available for antigen peptides.</li>
          <li>
            All custom peptides are accompanied with MS and HPLC analyses.
            Additional analytical data are available upon request at additional
            charge.
          </li>
          <li>All peptides are shipped lyophilized.</li>
        </ul>
      </div>

      <LightText data="Please send us the sequence of the peptide(s) in order to assess ease of synthesis, which will reflect in the price quoted." />
      <FooterOutside />
    </div>
  );
}
