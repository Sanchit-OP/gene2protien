import Footer from './Footer'
import LineAbout from './LineAbout';

function FooterOutside(){
    return(
        <div class="bg-white mb-0 pb-5 hidden md:block">
            <Footer />
            <LineAbout />
        </div>
    );
}

export default FooterOutside