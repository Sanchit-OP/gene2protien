import './Logo.css';
import LogoG from '../Ui/g20.png';
function Logo(){
    return(
        <div className="logo">
            <img className="logo" src={LogoG} />
        </div>
    )
}

export default Logo