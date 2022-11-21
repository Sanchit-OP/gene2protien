import React from "react";
import Lionimg from '../Ui/makeInIndia.svg';

export default function Lion() {
    return (
        <div className="hidden md:block w-[50%] my-10 max-w-screen-lg mx-auto pb-10 flex">
            <img className="mx-auto" src={Lionimg} alt="none" />
        </div>
    );
}