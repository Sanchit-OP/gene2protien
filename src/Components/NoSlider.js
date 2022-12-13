import React from "react";
import "./Slider.css";
import img1 from "../Ui/image_asset/1.jpeg";
import img2 from "../Ui/image_asset/2.jpeg";
import { useState } from "react";

function NoSlider() {
  return (
    <div
      className=" h-full   p-[2%] pl-[3%] "
      style={{ backgroundColor: "#28A282" }}
    >
      <h1 className=" headingssm  md:headings p-2 md:p-0 md: font-medium">
        Highlights
      </h1>
      <div className="flex flex-row justify-around">
        <div className="ml-20">
          <img className=" mb-4 md:w-4/5" src={img1}></img>
          {/* <div className="w-4/5">
                        <p className="hidden font-semibold text-justify white md:block">The GreenRTM   Nucleic Acid staining dye has been developed in a joint collaboration with Biotech Desk Pvt. Ltd., Hyderabad and CSIR-CDRI, Lucknow. This dye is used in place of Ethidium bromide which intercalates between DNA strands and fluoresces when UV light is shone. To overcome the toxicity of EtBr, we have developed the GreenRTM  dye, which is not toxic or mutagenic. This is now being scaled up for manufacture at Gene to Protein for use in staining gels and for Realtime PCR.
                        </p>
                    </div> */}
        </div>
        <div>
          <img className=" mb-4    md:w-4/5" src={img2}></img>
          {/* <div className="w-4/5">
                        <p className=" hidden font-semibold text-justify white md:block">The GreenRTM   Nucleic Acid staining dye has been developed in a joint collaboration with Biotech Desk Pvt. Ltd., Hyderabad and CSIR-CDRI, Lucknow. This dye is used in place of Ethidium bromide which intercalates between DNA strands and fluoresces when UV light is shone. To overcome the toxicity of EtBr, we have developed the GreenRTM  dye, which is not toxic or mutagenic. This is now being scaled up for manufacture at Gene to Protein for use in staining gels and for Realtime PCR.
                        </p>
                    </div> */}
        </div>
      </div>
      <div className="">
          <p className=" hidden font-semibold text-justify white md:block">
            The GreenRTM Nucleic Acid staining dye has been developed in a joint
            collaboration with Biotech Desk Pvt. Ltd., Hyderabad and CSIR-CDRI,
            Lucknow. This dye is used in place of Ethidium bromide which
            intercalates between DNA strands and fluoresces when UV light is
            shone. To overcome the toxicity of EtBr, we have developed the
            GreenRTM dye, which is not toxic or mutagenic. This is now being
            scaled up for manufacture at Gene to Protein for use in staining
            gels and for Realtime PCR.
          </p>
        </div>
    </div>
  );
}
export default NoSlider;
