import './Menubar.css';
import MenuItem from './MenuItem';
import Logo from './Logo';
function Menubar(){
    return(
        <div className='main-menu'>
            <Logo />
            <div className='menubar'>
                <MenuItem name='products'/>
                <MenuItem name='resource'/>
                <MenuItem name='carrers'/>
                <MenuItem name='menu'/>
                <MenuItem name='about'/>
                <MenuItem name='services'/>
                <MenuItem name='contact'/>
            </div>
        </div>
    );
}

export default Menubar;