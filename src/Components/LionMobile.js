import React from "react";
import Lionimg from '../Ui/makeInIndia.svg';

export default function LionMobile(){
    return(
            <div className="block md:hidden" >
                <img src={Lionimg} alt="none" />
            </div>
    );
}