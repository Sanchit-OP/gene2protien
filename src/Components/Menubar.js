import './Menubar.css';
import MenuItem from './MenuItem';
import Logo from './Logo';
function Menubar(){
    return(
        <div className='menubar'>
            <Logo />
            <MenuItem name='products'/>
            <MenuItem name='resource'/>
            <MenuItem name='carrers'/>
            <MenuItem name='menu'/>
            <MenuItem name='about'/>
            <MenuItem name='services'/>
            <MenuItem name='contact'/>
        </div>
    );
}

export default Menubar;