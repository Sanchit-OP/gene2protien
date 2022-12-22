import FooterOutside from "../../FooterOutside";
import Top2 from "../../top2";
import DarkText from "../ServiceText/darkText";
import LightText from "../ServiceText/lightText";
import Title from "../ServiceText/title";
import img from "../../../Ui/table1.png"

export default function PolyCl() {
  return (
    <div className="bg-white">
      <Top2 color="#fff799" />
      <Title color="#fff799" data="Custom Polyclonal Antibody Service" />
      <DarkText data="PolyExpress™ Custom Polyclonal Antibody Production Services" />
      <div className="font-semibold text-xl p-10 ml-14">Key Features</div>
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>Cost effective and comprehensive</li>
          <li>Fast turnaround time</li>
          <li>
            Optimal immunization: Our OptimumAntigen<sup>™</sup> design tool and
            intelligent Antigen Strategy increase specificity and affinity of
            antibodies
          </li>
          <li>
            Guaranteed results: Affinity purified custom polyclonal antibody
            quantities and ELISA titers of 1:64,000
          </li>
          <li>
            Certified facility: AAALAC International accreditation and OLAW
            certification, demonstrating our commitment to responsible animal
            care and use
          </li>
        </ul>
      </div>
      <LightText data="Specifications" />
        <img className="w-2/5 p-10 ml-20" src={img} />
      <DarkText data="*Each package only applies to a single protein sequence." />
      <FooterOutside />
    </div>
  );
}
