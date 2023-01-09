import FooterOutside from "../../FooterOutside";
import Top2 from "../../top2";
import DarkText from "../ServiceText/darkText";
import LightText from "../ServiceText/lightText";
import Title from "../ServiceText/title";
import img from "../../../Ui/table4.png";

export default function Phospho() {
  return (
    <div className="bg-white">
      <Top2 color="#fff799" />
      <Title color="#fff799" data="Phospho specific Antibodies" />
      <DarkText data="Phosphorylation-Specific Antibody Production Services" />
      <div className="font-semibold text-xl p-10 ml-14">Key Features</div>
      <LightText data="(Highly Specific Antibodies for Protein Phosphorylation Detection)" />
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>
            Optimized immunization: Our OptimumAntigen™ design tool and
            intelligent Antigen Strategy increase specificity and affinity of
            antibodies
          </li>
          <li>
            Guaranteed results: ELISA titer of ≥1:64,000 for phospho-specific
            pAb and mAb
          </li>
          <li>
            At least 2 positive hybridoma clones for phospho-specific mAb
            development**
          </li>
          <li>Fast turnaround time: </li>
          <li>
            Certified facility: AAALAC International accreditation and OLAW
            certification, demonstrating our commitment to responsible animal
            care and use
          </li>
        </ul>
      </div>
      <img className="md:w-3/5 p-10 md:ml-20" src={img} />    
      <FooterOutside />
    </div>
  );
}
