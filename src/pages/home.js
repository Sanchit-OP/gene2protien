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
import Top from '../Components/top';

function Home() {
  return (
    <div>
      <Top />
      <Landtext />
      <LandtextMobile />
      {/* <Slider /> */}
      <NoSlider />
      <AboutText />
      <AboutTextMobile />
      <LionMobile />
      <FooterOutside />
    </div>
  );
}

export default Home;
