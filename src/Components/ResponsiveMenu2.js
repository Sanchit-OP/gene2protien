import React from "react";
import { useState } from "react"; // import state
import LogoG from '../Ui/g20black.png';
import LogoGn from '../Ui/Logonew2.svg';

export default function ResponsiveMenu2() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between py-8 " >

     <div className="ml-0 md:ml-20">
      <a href="/">
        <img className=" w-5/6 md:w-auto max-w-[17rem]  opacity-100 duration-[600ms] m-3 hover:opacity-80 h-20  " src={LogoGn} alt="logo" />
      </a>

      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-10"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Products">Products</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Services">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/resources">Resources</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Career">Career</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-2xl font-[500] text-black mx-20">
          <li >
            <a className="mx-3 duration-100 hover:text-3xl" href="/about">About</a>
          </li>
          <li >
            <a className="mx-3 duration-100 hover:text-3xl" href="/Products">Products</a>
          </li>
          <li >
            <a className="mx-3 duration-100 hover:text-3xl" href="/Services">Services</a>
          </li>
          <li >
            <a className="mx-3 duration-100 hover:text-3xl" href="/resources">Resources</a>
          </li>
          <li >
            <a className="mx-3 duration-100 hover:text-3xl" href="/Career">Career</a>
          </li>
          <li >
            <a className="mx-3 duration-100 hover:text-3xl" href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
            display: none;
        }
        .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        `}
      </style>
    </div>
  );
}

