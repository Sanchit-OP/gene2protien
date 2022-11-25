import Landtext from '../Components/Landtext';
import Discription from '../Components/Discription';
import AboutText from '../Components/AboutText';
import FooterOutside from '../Components/FooterOutside';
import Slider from '../Components/Slider';
import NoSlider from '../Components/NoSlider';
import ResponsiveMenu from '../Components/ResponsiveMenu';
import LandtextMobile from '../Components/LandtextMobile';
import DiscriptionMobile from '../Components/DiscriptionMobile';
import AboutTextMobile from '../Components/AboutTextMobile';
import Lion from '../Components/Lion';
import LionMobile from '../Components/LionMobile';
import WhatsNew from '../Components/WhatsNew';

function Home() {
  return (
    <div>
      <ResponsiveMenu />
      <Landtext />
      <LandtextMobile />
      {/* <Slider /> */}
      <NoSlider />
      <AboutText />
      <AboutTextMobile />
      <Lion />
      <LionMobile />
      <WhatsNew />
      <FooterOutside />
    </div>
  );
}

export default Home;
