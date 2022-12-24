import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";


export default function Protein(){
    return(
        <div className="bg-white">
            <Top2 color="#798cc9" />
            <Title color="#798cc9" data="Protein Crystallization" />

            <DarkText data="Coming Soon..." />
            <FooterOutside />
        </div>
    );
}