import FooterOutside from '../Components/FooterOutside';
import ServiceCombined from '../Components/services/servicecombined';
import ServiceTitle from '../Components/services/servicetitle';
import Top2 from '../Components/top2';


export default function Services(){
    return(
        <div>
            <Top2 color="white"/>
            <ServiceTitle />
            <ServiceCombined />
            <FooterOutside />
        </div>
    );
}