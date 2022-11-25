import React from "react";
import "./Slider.css";
import img1 from "../Ui/image_asset/1.jpeg"
import img2 from "../Ui/image_asset/2.jpeg"
import { useState } from 'react'

function NoSlider() {
    return (
        <div className="back">
            <h1 className="headings p-2 mb:p-0">
                Highlights
            </h1>
            <div className="flex flex-row justify-between">
                <div>
                    <img className="w-4/5 mb-4" src={img1} ></img>
                    <div className="w-4/5">
                        <p className="font-semibold text-justify">The GreenRTM   Nucleic Acid staining dye has been developed in a joint collaboration with Biotech Desk Pvt. Ltd., Hyderabad and CSIR-CDRI, Lucknow. This dye is used in place of Ethidium bromide which intercalates between DNA strands and fluoresces when UV light is shone. To overcome the toxicity of EtBr, we have developed the GreenRTM  dye, which is not toxic or mutagenic. This is now being scaled up for manufacture at Gene to Protein for use in staining gels and for Realtime PCR.
                        </p>
                    </div>
                </div>
                <div>
                    <img className="w-4/5 mb-4" src={img2} ></img>
                    <div className="w-4/5">
                        <p className="font-semibold text-justify">The GreenRTM   Nucleic Acid staining dye has been developed in a joint collaboration with Biotech Desk Pvt. Ltd., Hyderabad and CSIR-CDRI, Lucknow. This dye is used in place of Ethidium bromide which intercalates between DNA strands and fluoresces when UV light is shone. To overcome the toxicity of EtBr, we have developed the GreenRTM  dye, which is not toxic or mutagenic. This is now being scaled up for manufacture at Gene to Protein for use in staining gels and for Realtime PCR.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NoSlider;
