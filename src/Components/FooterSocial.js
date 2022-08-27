import './FooterSocial.css';
import FaceBook from '../Ui/facebook.svg';
import Twitter from '../Ui/twitter.svg';
import LinkedIn from '../Ui/linkedin.svg';

function FooterSocial(){
    return(
        <div>
            <h5 class="follow">FOLLOW US</h5>
            <div class="social-container">
                <img className="icon" src={FaceBook} />
                <img className="icon" src={Twitter} />
                <img className="icon" src={LinkedIn} />
            </div>
        </div>
    );
}
export default FooterSocial