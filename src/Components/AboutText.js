import bolimg from "../Ui/whatsnewbol.png";
function AboutText() {
  return (
    <div className=" m-36  mt-30 hidden md:block">
      <h1 className=" text-6xl font-medium text-[#107586] font-[poppins]">
        Whats New
      </h1>
      <p className="text-sm font-semibold text-white text-justify mt-10 mr-48 ml-24">
        G2Pzol is a simple and easy, single-step isolation reagent to isolate
        total RNA from biological samples. A single-step liquid phase separation
        results in the isolation of RNA from DNA, protein, polysaccharides, and
        other molecules. RNA can then be isolated from the aqueous supernatant
        by alcohol/isopropanol precipitation. The resulting RNA is intact
        showing distinct bands of 28S (23S), 18S (16S) and 5.5S (5S) rRNA with
        little or no contaminating DNA and protein.
      </p>
      <div className="m-16  flex justify-evenly ">
        <img className="bolimg" src={bolimg} alt="/"></img>
        <p className="white text-sm font-semibold mx-20 my-10">
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
    </div>
  );
}
export default AboutText;
