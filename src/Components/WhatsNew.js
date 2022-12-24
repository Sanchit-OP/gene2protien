import { FaArrowDown } from 'react-icons/fa';
import { useState } from 'react'

function WhatsNew() {

    const [bool, setbool] = useState(true);

    function disappear() {
        setbool(false);
    }

    return (
        <div>{bool &&

            <div id="gayab" className="fixed shadow-2xl bottom-3 right-3 z-100 bg-gradient-to-r w-[50%] h-[30%] from-blue-500 to-purple-500 p-5 rounded-tl-[10%] opacity-[86%] d-bblue z-50 md:w-[22%] md:h-[30%]">
                <div className='flex justify-between'>
                    
                    <h5 className="font-semibold">What's New</h5>
                    <div className=" " onClick={disappear}>
                        <FaArrowDown />
                    </div>
                </div>
                <p className="text-[0.65rem] overflow-scroll text-white">A better alternate to TRIzol!
                    G2Pzol is a simple and easy, single-step isolation reagent to isolate total RNA from biological samples. A
                    single-step liquid phase separation results in the isolation of RNA from DNA, protein, polysaccharides, and
                    other molecules. RNA can then be isolated from the aqueous supernatant by alcohol/isopropanol precipitation.
                    The resulting RNA is intact showing distinct bands of 28S (23S), 18S (16S) and 5.5S (5S) rRNA with little or no
                    contaminating DNA and protein.
                </p>

            </div>}
        </div>
    )
}

export default WhatsNew