import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import c from "../assets/c++.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import ProgressBar from "./ProgressBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Skills() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".left,.right", {
      opacity: 0,
      y: 100,
      duration: 3,
      stagger: 1,
    });
  });

  return (
    <div className="skills h-[100vh] w-[100%] pt-20 pl-10 bg-gradient-to-r from-[#a0e9d089] to-[#77bedac8]">
      <h1 className="text-2xl font-bold p-4 mr-6 border-b-4 border-solid border-yellow-500">
        My Skills
      </h1>
      <h2>Here are my Skills..</h2>
      <div className="skill flex h-[85%] w-[90%]">
        <div className="left h-[100%] w-[50%] flex flex-col justify-center gap-4 pl-[2rem] ">
          <h2 className="text-xl font-bold">
            <i className="ri-html5-fill"></i> HTML5
          </h2>
          <ProgressBar width="98%" />
          <h2 className="text-xl font-bold">
            <i className="ri-css3-fill"></i> CSS3
          </h2>
          <ProgressBar width="96%" />
          <h2 className="text-xl font-bold">
            <i className="ri-javascript-fill"></i> JavaScript
          </h2>
          <ProgressBar width="90%" />
          <h2 className="text-xl font-bold">
            <i className="ri-reactjs-fill"></i> React Js
          </h2>
          <ProgressBar width="93%" />
          <h2 className="text-xl font-bold">
            <i className="ri-tailwind-css-fill"></i> Tailwind CSS
          </h2>
          <ProgressBar width="85%" />
        </div>
        <div className="right h-[100%] w-[50%] flex flex-col items-center justify-center gap-14">
          <div className="flex w-[60%] gap-10">
            <div className="bg-[#e0e0e0] rounded-[20%] shadow-[12px_12px_24px_#8b8b8b]">
              <img src={nodejs} className="h-[100px] " />
            </div>
            <div className="bg-[#e0e0e0] rounded-[20%] shadow-[12px_12px_24px_#8b8b8b]">
              <img
                src={express}
                className="h-[100px] p-4 bg-yellow-500 rounded-[20%]"
              />
            </div>
            <div className="bg-[#e0e0e0] rounded-[20%] shadow-[12px_12px_24px_#8b8b8b]">
              <img src={mongodb} className="h-[100px]" />
            </div>
          </div>
          <div className="flex w-[60%] gap-10 ">
            <div className="bg-[#e0e0e0] rounded-[20%] shadow-[12px_12px_24px_#8b8b8b]">
              <img src={c} className="h-[100px]" />
            </div>
            <div className="bg-[#e0e0e0] rounded-[20%] shadow-[12px_12px_24px_#8b8b8b]">
              <img
                src={java}
                className="h-[100px] p-4 bg-yellow-500 rounded-[20%]"
              />
            </div>
            <div className="bg-[#e0e0e0] rounded-[20%] shadow-[12px_12px_24px_#8b8b8b]">
              <img src={python} className="h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
