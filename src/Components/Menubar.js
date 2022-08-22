import './Menubar.css';
import MenuItem from './MenuItem';

function Menubar(){
    return(
        <div className='menubar'>
            <MenuItem name='products'/>
            <MenuItem name='products'/>
            <MenuItem name='products'/>
            <MenuItem name='products'/>
            <MenuItem name='products'/>
            <MenuItem name='products'/>
        </div>
    );
}

export default Menubar;