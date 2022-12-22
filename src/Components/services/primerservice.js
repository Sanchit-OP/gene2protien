import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";


export default function PrimerService(){
    return(
        <div className="bg-white">
            <Top2 color="#7da7d9" />
            <Title color="#7da7d9" data="Primer Synthesis" />

            <DarkText data="Coming Soon..." />
            <FooterOutside />
        </div>
    );
}