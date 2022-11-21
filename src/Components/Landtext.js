import './Landtext.css';

function Landtext(){
    return(
        <div className=' hidden md:block sm:hidden'>
            <div class="banner-container  ">
                <h1 className="land-title d-blue">Lorem Ipsum lore ip</h1>
                <h5 className="under-title white">Lorem Ipsum Lorem Ipsum </h5>
                <a className='duration-100 hover:text-sm ' href='/products' >
                    <button className="ban-button white duration-100  ">LEARN MORE</button>
                </a>
                
            </div>
        </div>
    )
};

export default Landtext
