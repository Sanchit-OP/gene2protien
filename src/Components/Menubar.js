import './Menubar.css';
import MenuItem from './MenuItem';
import Logo from './Logo';
function Menubar(){
    return(
        <div className='main-menu'>
            <Logo />
            <div className='menubar'>
                <MenuItem name='About'/>
                <MenuItem name='Products'/>
                <MenuItem name='service'/>
                <MenuItem name='resource'/>
                <MenuItem name='carrer'/>
                <MenuItem name='contact'/>
            </div>
        </div>
    );
}

export default Menubar;