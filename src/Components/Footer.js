
import FooterLogo from './FooterLogo';
import FooterRight from './FooterRight';
import FooterSocial from './FooterSocial';

function Footer(){
    return(
        <div className="p-12 bg-white flex flex-row justify-between mb-0">
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