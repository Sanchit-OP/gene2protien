import AboutVideo from "../Components/AboutVideo";
import AboutTranscript from "../Components/AboutTranscript";
import AboutUsTitle from "../Components/AboutUsTitle";
import React from "react";
import FooterOutside from "../Components/FooterOutside";

function AboutUs() {
    return (
        <div className="h-screen">
            <div className="grid place-items-center">
                <AboutUsTitle />
            </div>
            <div className="   md:flex justify-start my-[10%]">
                <AboutVideo />
                <AboutTranscript />
            </div>
            <FooterOutside />
        </div>
    )
}

export default AboutUs;