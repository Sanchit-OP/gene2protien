import AboutVideo from "../Components/AboutVideo";
import AboutTranscript from "../Components/AboutTranscript";
import AboutUsTitle from "../Components/AboutUsTitle";
import React from "react";
import FooterOutside from "../Components/FooterOutside";
import Top from "../Components/top";
import Aboutcontent from "../Components/aboutcontent";
import Labimg from "../Components/labimg";
import Director from "../Components/director";
import Directormobile from "../Components/directormobile";
import Top1 from "../Components/top1";

function AboutUs() {
    return (
        <div className="h-screen">
            <Top1  />
            <Labimg />
            {/* <div className="grid place-items-center" style={{ backgroundColor: "white" }}>
                <AboutUsTitle />
            </div> */}
            <Aboutcontent />
            <Director />
            <Directormobile />
            <FooterOutside />
        </div>
    )
}

export default AboutUs;