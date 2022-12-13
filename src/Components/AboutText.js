import bolimg from "../Ui/whatsnewbol.png";
import gel from "../Ui/gel.png";
import { FaArrowDown } from "react-icons/fa";
function AboutText() {
  return (
    <div className=" m-36  mt-30 hidden md:block">
      <h1 className=" text-6xl font-medium text-[#107586] font-[poppins]">
        What's New
      </h1>
      <div className=" text-4xl font-medium text-[#107586]">
        <ul className="list-disc m-10 ">
          <li> G2Pzol</li>
        </ul>
      </div>
      <div className="m-16  flex justify-evenly ">
        <img className="bolimg" src={bolimg} alt="/"></img>
        <p className="white text-sm font-semibold mx-20 my-10 leading-8">
          G2P-ZOLTM is a simple and easy, single-step isolation reagent to
          isolate total RNA from biological samples. A single-step liquid phase
          separation results in the isolation of RNA from DNA, protein,
          polysaccharides, and other molecules. RNA can then be isolated from
          the aqueous supernatant by alcohol/isopropanol precipitation. The
          resulting RNA is intact showing distinct bands of 28S (23S), 18S (16S)
          and 5.5S (5S) rRNA with little or no contaminating DNA and protein. 1
          mL of G2P-ZOLTMis sufficient to isolate RNA from up to 100 mg of
          tissueor 1x 107 cells
        </p>
      </div>
      <div className="m-16  flex justify-evenly ">
        <img className="bolimg" src={gel} alt="/"></img>
        <p className="white text-sm font-semibold mx-20 my-10 leading-8">
          Total RNA isolation from Mouse brain Lanes: 1-7 : 5 ul of Total RNA
          extracted from diff mice brain (Note 3 clear bands of 28S, 18S and
          5.5S rRNA) Lane 8: 1 kb ladder
        </p>
      </div>
    </div>
  );
}
export default AboutText;
