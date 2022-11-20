
import MenuItem from './MenuItem';
import Logo from './Logo';
function Menubar(){
    return(
        <div className='flex flex-row justify-between'>
            <Logo />
            <div className='flex flex-row justify-around'>
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