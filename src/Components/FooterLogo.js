import './FooterLogo.css';
import LogoBlack from '../Ui/g20black.png';

function FooterLogo(){
    return(
        <div>
            <img className="footlogo" src={LogoBlack} ></img>
        </div>
    );
}

export default FooterLogo;