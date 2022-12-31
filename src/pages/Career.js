import Top2 from '../Components/top2';
import FooterOutside from '../Components/FooterOutside';
import CarrerTitle from '../Components/CarrerTitle';
import CareerAbout from '../Components/CareerAbout';
import CarrerButton from '../Components/CareerButton';



export default function Career(){
    return(
        <div style={{ backgroundColor: "white" }}>
            <Top2 color="white" />
            <CarrerTitle />
            <CareerAbout />
            <CarrerButton />
            <FooterOutside />
           
        </div>
    );
}