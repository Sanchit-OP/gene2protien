import Menubar from '../Components/Menubar';
import Landtext from '../Components/Landtext';
import Discription from '../Components/Discription';
import AboutUs from '../Components/AboutUs';
import FooterOutside from '../Components/FooterOutside';
import Slider from '../Components/Slider';

function Home() {
    return (
      <div>
        <Menubar />
  
        <Landtext />
        
        <Discription />
  
        <Slider />
        <AboutUs />
        <FooterOutside/>
      </div>
    );
  }
  
  export default Home;
