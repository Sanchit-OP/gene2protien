import './Landtext.css';
import Bottle from '../Ui/Pills_Bottle_v02.png';

function Landtext(){
    return(
        <div class="banner-container">
            <h1 className="land-title d-blue">Lorem Ipsum lawda lasun</h1>
            <h5 className="under-title white">Lorem Ipsum bada lawda</h5>
            <img id='Bottle-style' src={Bottle} />
            <div>
                <button className="ban-button white">LEARN MORE</button>
            </div>
            
        </div>
    )
};

export default Landtext