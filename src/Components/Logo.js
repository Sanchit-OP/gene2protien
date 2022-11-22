
import LogoG from '../Ui/g20.png';
function Logo(){
    return(
        <div className=" hidden md:block max-w-[17rem] opacity-100 duration-[600ms] m-3 hover:opacity-80">
            <img className="logo" src={LogoG} />
        </div>
    )
}

export default Logo