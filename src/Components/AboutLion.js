import './AboutLion.css';
import Lion from '../Ui/gif.mp4';
function AboutLion(){
    return(
        <div className='video-style'>
            <video 
                src={Lion} 
                autoPlay = {true}
                controls = {false}
                loop = {true}
                muted = {true}
                className="video"
            />
        </div>
    );
}
export default AboutLion