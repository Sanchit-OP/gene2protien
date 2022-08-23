import './AboutLion.css';
import Lion from '../Ui/videolion_trim.mp4';
function AboutLion(){
    return(
        <div className='video-style'>
            <video className='video' src={Lion} autoPlay loop></video>
        </div>
    );
}
export default AboutLion