import FooterOutside from "../../FooterOutside";
import Top2 from "../../top2";
import Title from "../ServiceText/title";

export default function Other() {
  return (
    <div className="bg-white">
      <Top2 color="#fff799" />
      <Title color="#fff799" data="Other Antibody Services" />
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>Semi-custom mAb</li>
          <li>Fully-custom mAb services</li>
          <li>Anti-idiotype Antibody service</li>
          <li>Recombinant Antibody service</li>
          <li>Scale-up Antibody service</li>
          <li>Antibody Fluorscent Labelling</li>
          <li>Immunoassay development</li>
        </ul>
      </div>
      <FooterOutside />
    </div>
  );
}
