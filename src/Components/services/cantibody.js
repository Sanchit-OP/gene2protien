import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";

export default function CantiBody() {
  const off2 = "#3477eb";
  return (
    <div className="bg-white">
      <Top2 color="#fff799" />
      <Title color="#fff799" data="Custom Antibody Development" />
      <LightText data="All our antibody services are done through our partner Genscript, USA. They offers high quality custom antibody productions services and have produced over 14,000 custom antibodies.In addition to custom antibody services Genscript has diverse custom antibody service portfolio, which includes- antibody conjugation, fragmentation, sequencing, scale-up, immunoassay development, and antibody drug development." />
      <div className="my-20"></div>
      <DarkText data="Our most popular packages includes-" />
      <div className="my-10">
        <div
          className="px-10 ml-20 leading-10 hover:underline "
          style={{ color: off2 }}
        >
          <a href="/Services/Custom_AntiBody/PolyCl"> Polyclonal Antibody Service </a>
        </div>
        <div
          className="px-10 ml-20 leading-10 hover:underline "
          style={{ color: off2 }}
        >
          <a href="/Services/Custom_AntiBody/MonoCl"> Monoclonal Antibody Services </a>
        </div>
        <div
          className="px-10 ml-20 leading-10 hover:underline "
          style={{ color: off2 }}
        >
          <a href="/Services/Custom_AntiBody/Phospho"> Phospho specific Antibodies </a>
        </div>
        <div
          className="px-10 ml-20 leading-10 hover:underline "
          style={{ color: off2 }}
        >
          <a href="/Services/Custom_AntiBody/Other"> Other Antibody Services </a>
        </div>
      </div>

      <FooterOutside />
    </div>
  );
}
