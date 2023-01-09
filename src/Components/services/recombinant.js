import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";

export default function Recombination() {
    const off= "#c4df9b" ;

  return (
    <div className="bg-white">
      <Top2 color="#c4df9b" />
      <Title color="#c4df9b" data="Recombinant Protein Expression" />
      <LightText data="GenScript’s custom recombinant protein provides a comprehensive portfolio of recombinant protein expression systems that include :" />
      <div className="p-10 text-2xl font-semibold ml-10"  style={{ color: off }} >Bacterial Protein Expression system</div>
      <DarkText data="BacPower Guaranteed Bacterial Recombinant Protein Expression Service" />
      <div className="font-semibold text-xl p-10 md:ml-14">Deliverables:</div>
      <div className="font-normal px-10 pb-10 md:ml-32 leading-9">
        <ul className="list-disc">
          <li>
            Protein in buffered solution with your specified amount & purity –
            Guaranteed
          </li>
          <li>Optimized gene sequence report</li>
          <li>
            QC data<strong>– </strong>Purity analyzed & detection using SDS-PAGE
            & WB, Bradford assay for quantitation & Protein delivery
          </li>
        </ul>
      </div>
      <div className="p-10 text-2xl font-semibold ml-10"  style={{ color: off }} >Mammalian Expression system</div>
      <DarkText data="Transient Expression Service" />
      <div className="font-semibold text-xl p-10 md:ml-14">Deliverables:</div>
      <div className="font-normal px-10 pb-10 md:ml-32 leading-9 mb-10">
        <ul className="list-disc">
          <li>Synthetic gene (as optional for semi-customizable)</li>
          <li>Target protein</li>
          <li>
            QC data -SDS-PAGE and/or HPLC will be performed to determine protein
            purity. BCA or Bradford assay will be used to measure protein
            concentration
          </li>
        </ul>
      </div>
      <div className="font-semibold text-xl p-10 ml-14">
        Stable Cell Line Development Services
      </div>
      <div className="font-normal px-10 pb-10 md:ml-32 leading-9 mb-10">
        <ul className="list-disc">
          <li>
            <strong>Host cells:</strong>CHO, CHO-K1, Glutamine
            Synthetase-knockout CHO-K1, HEK293, 293T, 293EC18, 293EC18/CRE-Luc,
            1321N1, RH7777, U-2OS, or customer-specified cell line.
          </li>
          <li>
            <strong>Genes:</strong>Antibodies, GPCRs, ion channels, proteases,
            kinases, transmembrane proteins and more.
          </li>
        </ul>
      </div>
      <div className="p-10 text-2xl font-semibold ml-10" style={{ color: off }} >Baculovirus Expression system</div>
      <DarkText data="BacuVance Baculovirus Expression Service" />
      <div className="font-semibold text-xl p-10 md:ml-14">Deliverables:</div>
      <div className="font-normal px-10 pb-10 md:ml-32 leading-9 mb-10">
        <ul className="list-disc">
          <li>Construct report</li>
          <li>5 ml, &gt;108 pfu/ml virus stock</li>
          <li>Expression data</li>
          <li>Purified proteins</li>
          <li>
            *QC data- SDS-PAGE will be performed to determine protein purity.
            BCA or Bradford assay will be used to measure protein concentration
            and Western blot using anti-His or anti-GST antibodies will be
            performed, to determine protein identity. LC-MS/MS peptide mapping
            will be used in addition to Western Blot, to determine protein
            identity (if necessary)
          </li>
        </ul>
      </div>
      <div className="p-10 text-2xl font-semibold ml-10" style={{ color: off }}  >Other Protein Expression systems</div>
      <DarkText data="PROTential Protein expression service" />
      <LightText data="PROTential Protein expression evaluation & optimization service is to test expression conditions of client gene(s) in the expression system(s) of their choice. It is a small scale Expression Evaluation available in customized packages with below features." />
      <div className="font-normal px-10 pb-10 md:ml-32 leading-9 mb-10">
        <ul className="list-disc">
          <li>
            Evaluate whether the target protein expresses in chosen expression
            system
          </li>
          <li>
            Identify the construct &amp; conditions that gives you the most
            robust soluble expression of your target protein
          </li>
          <li>Identify the best expression system for your target protein</li>
        </ul>
      </div>

      <DarkText data="Final Deliverables:" />
      <LightText data="Only the expression report is delivered. The protein is consumed in the evaluation experiment and hence does not form part of the deliverables." />
    <div className="my-20"></div>
      <DarkText data="Protein sequences are subject to pre-project analysis. Depending upon the nature of the protein and its sequence, different expression hosts and conditions may be suggested. For membrane proteins, toxic proteins and large proteins (>800 aa), special modifications may be suggested." /> 
      <FooterOutside />
    </div>
  );
}
