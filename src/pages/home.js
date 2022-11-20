import Landtext from '../Components/Landtext';
import Discription from '../Components/Discription';
import AboutText from '../Components/AboutText';
import FooterOutside from '../Components/FooterOutside';
import Slider from '../Components/Slider';
import ResponsiveMenu from '../Components/ResponsiveMenu';
import LandtextMobile from '../Components/LandtextMobile';
import DiscriptionMobile from '../Components/DiscriptionMobile';
import AboutTextMobile from '../Components/AboutTextMobile';
import Lion from '../Components/Lion';
import LionMobile from '../Components/LionMobile';

function Home() {
  return (
    <div>
      <ResponsiveMenu />
      <Landtext  />
      <LandtextMobile />
      <Discription />
      <DiscriptionMobile />
      <Slider />
      <AboutText />
      <AboutTextMobile />
      <Lion />
      <LionMobile />
      <FooterOutside /> 
    </div>
  );
}

export default Home;
