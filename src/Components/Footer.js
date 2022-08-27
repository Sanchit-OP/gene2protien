import './Footer.css';
import FooterLogo from './FooterLogo';
import FooterRight from './FooterRight';
import FooterSocial from './FooterSocial';

function Footer(){
    return(
        <div className="footer-container">
             <div className="foot-logo">
                <FooterLogo />
            </div>
            <div class="foot-list">
                <FooterRight />
            </div>
            <div>
                <FooterSocial />
            </div>
        </div>
    );

}

export default Footer;