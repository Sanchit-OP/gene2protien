import Menubar from '../Components/Menubar';
import Landtext from '../Components/Landtext';
import Discription from '../Components/Discription';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

function Home() {
    return (
      <div>
        <Menubar />
  
        <Landtext />
        
        <Discription />
  
        <AboutUs />
        <Slider />
        <Footer/>
      </div>
    );
  }
  
  export default Home;