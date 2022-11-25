import { FaArrowDown } from 'react-icons/fa';
import { useState } from 'react'

function WhatsNew() {

    const [bool, setbool] = useState(true);

    function disappear() {
        setbool(false);
    }

    return (
        <div>{bool &&

            <div id="gayab" className="fixed shadow-2xl bottom-3 right-3 z-100 w-[20%] h-[25%] bg-white p-5 rounded-tl-[10%] opacity-[86%] d-bblue z-50">
                <div className="relative left-[90%]" onClick={disappear}>
                    <FaArrowDown />
                </div>
                <h5 className="font-semibold">What's New</h5>
                <p className="text-xs text-white">A better alternate to TRIzol!
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