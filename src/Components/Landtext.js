import './Landtext.css';

function Landtext() {
    return (
        <div className=' hidden md:block sm:hidden'>
            <div class="banner-container  ">
                <h1 className="land-title d-blue font-semibold">Hamara Vigyan Hamara Swabhiman</h1>
                <h5 className="under-title white"> </h5>
                {/* <a className='duration-100 hover:text-sm ' href='/products' >
                    <button className="ban-button white duration-100  ">LEARN MORE</button>
                </a> */}
                <div className='w-3/5'>
                    <p className='text-white font-semibold leading-7 mt-5'>
                        Gene to Protein Pvt. Ltd. provides an end-to-end service to Life science researchers right from gene cloning to protein structure and function. We at Gene to Protein produce all enzymes, kits and biochemicals that Indian researchers have so long bought from MNCs and foreign manufacturers, at our very own labs at Lucknow and Hyderabad respectively. We aim for the highest standards of quality and consistency, which may indeed be the cornerstone of winning people’s trust. To make India Atmanirbhar is our motto!
                    </p>
                </div>

            </div>
        </div>
    )
};

export default Landtext
