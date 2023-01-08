import React from "react";
import "./Slider.css";
import img1 from "../Ui/image_asset/3.png";
import img2 from "../Ui/image_asset/2.jpeg";
import img3 from "../Ui/image_asset/1.jpeg";

import { useState } from "react";

function NoSlider() {
  
  return (
    <div>
    <div
      className="hidden h-full   p-[2%] pl-[3%] md:block "
      style={{ backgroundColor: "#7cc576" }}
    >
      <h1 className=" headingssm  md:headings p-2 md:p-0 md: font-medium">
        Highlights
      </h1>
      <div className=" flex justify-center mx-auto">
          <img className="  md:w-4/5" src={img1}></img>
      </div>
      </div>

      {/* for mobilw view */}
      <div className="block md:hidden" style={{ backgroundColor: "#7cc576" }} >
      <h1 className=" px-8 py-4 text-2xl font-bold text-center ">
        Highlights
      </h1>
      <div className="">
        <img className=" px-10" src={img2}></img>
          <p className="p-4 mx-2 text-justify text-sm font-semibold  black ">
            The GreenR<sup>TM</sup> Nucleic Acid staining dye has been developed in a joint
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
    
    </div>
  );
}
export default NoSlider;
