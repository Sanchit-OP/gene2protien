import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import image from "../Ui/image_asset/imagedata";

function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="back my-10">
            <div className="ourproject">
                <h1 className="headings p-2 mb:p-0">
                    Highlights
                </h1>
                <motion.div ref={carousel} className="carousel">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="inner-carousel"
                    >
                        {image.map((image) => {
                            return (
                                <motion.div className="imagee">
                                    <img src={image} alt="" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
export default Slider;
