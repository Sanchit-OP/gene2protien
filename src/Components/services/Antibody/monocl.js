import FooterOutside from "../../FooterOutside";
import Top2 from "../../top2";
import DarkText from "../ServiceText/darkText";
import LightText from "../ServiceText/lightText";
import Title from "../ServiceText/title";
import img from "../../../Ui/table2.png";
import img2 from "../../../Ui/table3.png";

export default function MonoCl() {
  return (
    <div className="bg-white">
      <Top2 color="#fff799" />
      <Title color="#fff799" data="Custom Monoclonal Antibody Services" />
      <DarkText data="MonoExpress™ Custom Monoclonal Antibody Production Services" />
      <div className="font-semibold text-xl p-10 ml-14">Key Features</div>
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>
            Application-Guaranteed: MonoExpress<sup>™</sup> Premium guarantees
            at least 1 clone will work in your experimental system
          </li>
          <li>
            Optimized immunization: Our advanced technologies – OptimumAntigen
            <sup>™</sup> design tool, proprietary immunization technology, and
            new GANP mouse – increase specificity and affinity of antibodies
          </li>
          <li>
            Fast turnaround time: We deliver antibodies 4 months faster than
            traditional immunization protocols
          </li>
          <li>
            Certified facility: AAALAC International accreditation and OLAW
            certification demonstrate our commitment to responsible animal care
            and use
          </li>
        </ul>
      </div>
      <LightText data="Monoclonal antibody production using peptide as antigen" />
      <img className="md:w-2/5 p-10 md:ml-20" src={img} />
      <LightText data="Monoclonal antibody production using protein as antigen" />
      <img className="md:w-2/5 p-10 md:ml-20" src={img2} />
      <FooterOutside />
    </div>
  );
}
