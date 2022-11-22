import AboutVideo from "../Components/AboutVideo";
import AboutTranscript from "../Components/AboutTranscript";
import AboutUsTitle from "../Components/AboutUsTitle";
import React from "react";
import FooterOutside from "../Components/FooterOutside";
import Top from "../Components/top";

function AboutUs() {
    return (
        <div className="h-screen">
            <Top color="white" />
            <div className="grid place-items-center" >
                <AboutUsTitle />
            </div>
            <div className="   md:flex-col md:mx-[10%]  md:my-[10%]" >
                <AboutVideo />
                <AboutTranscript />
            </div>
            <FooterOutside />
        </div>
    )
}

export default AboutUs;