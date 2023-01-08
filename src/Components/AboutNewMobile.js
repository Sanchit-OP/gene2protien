import bolimg from "../Ui/whatsnewbol.png";
import gel from "../Ui/gel.png";

function AboutNewMobile() {
  return (
    <div className=" mt-32 block  md:hidden">
      <h1 className=" pl-10 text-4xl font-semibold text-[#288c4f] font-[poppins]">
        What's New
      </h1>
      <br />
      <div className=" text-2xl font-semibold text-center mt-10 text-[#288c4f] mx-10">
        G2Pzol
      </div>
      <div className=" items-center flex-col justify-evenly ">
        <div className="flex flex-row justify-around">
          <img className="bolimg2" src={bolimg} alt="/" />
        </div>
        <p className="black text-sm font-medium px-4 my-10 leading-6">
          G2P-ZOL<sup>TM</sup> is a simple and easy, single-step isolation
          reagent to isolate total RNA from biological samples. A single-step
          liquid phase separation results in the isolation of RNA from DNA,
          protein, polysaccharides, and other molecules. RNA can then be
          isolated from the aqueous supernatant by alcohol/isopropanol
          precipitation. The resulting RNA is intact showing distinct bands of
          28S (23S), 18S (16S) and 5.5S (5S) rRNA with little or no
          contaminating DNA and protein. 1 mL of G2P-ZOLTMis sufficient to
          isolate RNA from up to 100 mg of tissueor 1x 10<sup>7 </sup>cells
        </p>
      </div>
      <div className="items-center flex-col justify-evenly ">
        <div className="flex flex-row justify-around">
          <img className="bolimg3" src={gel} alt="/" />
        </div>
        <p className="black text-sm font-medium px-4 my-10 leading-6">
          Total RNA isolation from Mouse brain Lanes: 1-7 : 5 ul of Total RNA
          extracted from diff mice brain (Note 3 clear bands of 28S, 18S and
          5.5S rRNA) Lane 8: 1 kb ladder
        </p>
        <div className="py-10"></div>
      </div>
    </div>
  );
}
export default AboutNewMobile;
