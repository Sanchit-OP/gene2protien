import FooterList from './FooterList';
import FooterSocial from './FooterSocial';

function FooterRight(){
    var l1= ["PRODUCT", "Popular", "Trending", "Catalog", "Features"];
    var l2= ["COMPANY", "Press Releases", "Mission", "Strategy", "Works"];
    var l3= ["INFO", "Support", "Developers", "Service", "Get Started"];
    return(
        <div className="flex ml-48">
            <FooterList name={l1}/>
            <FooterList name={l2}/>
            <FooterList name={l3}/>
            {/* <FooterSocial/> */}
        </div>
    )
    
}
export default FooterRight