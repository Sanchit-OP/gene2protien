import React from "react";
import Lionimg from '../Ui/makeInIndia.svg';

export default function Lion(){
    return(
            <div className="hidden md:block w-[50%]  ml-[15em] my-10">
                <img src={Lionimg} alt="none" />
            </div>
    );
}