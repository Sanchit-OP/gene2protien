import './AboutUs.css';
import AboutText from './AboutText';
import AboutLion from './AboutLion';

function AboutUs(){
    return(
        <div className='AboutUs-flex'>
            <AboutText />
            <AboutLion />
        </div>
    );
}
export default AboutUs