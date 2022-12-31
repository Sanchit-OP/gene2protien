import FaceBook from '../Ui/facebook.svg';
import Twitter from '../Ui/twitter.svg';
import LinkedIn from '../Ui/linkedin.svg';

function FooterSocial(){
    return(
        <div>
            <h5 class="tracking-widest">FOLLOW US</h5>
            <div class="flex justify-between flex-row w-24 mr-12">
                <a href="https://www.facebook.com/genetoprotein"><img className="h-6 w-auto" src={FaceBook} /></a>
                <img className="h-6 w-auto" src={Twitter} />
                <a href="https://www.linkedin.com/company/genetoprotein/"><img className="h-6 w-auto" src={LinkedIn} /></a>
            </div>
        </div>
    );
}
export default FooterSocial
