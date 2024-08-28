import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";
// import pic from "../assets/pic.png";
import Fsd from "../assets/FSD2.png";
// import ResumePdf from "../assets/Resume.pdf";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    gsap.to(".fsd", {
      rotate: 360,
      duration: 15,
      delay: -1,
      repeat: -1,
    });
    gsap.from(".left", {
      opacity: 0,
      x: -100,
      duration: 3,
    });
    gsap.from("img", {
      opacity: 0,
      y: -300,
      duration: 3,
    });
  });

  return (
    <div className="home p-[6%] flex items-center justify-evenly h-[100vh] w-[100%] bg-gradient-to-r from-[#a0e9d089] to-[#77bedac8]">
      <div className="left h-[70%] w-[40%] flex flex-col justify-evenly items-center">
        <div className="content flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-3">
            Hello, I&apos;m Ashfaque Ansari
          </h1>
          <h2 className="text-2xl font-bold mb-3">Web Developer</h2>
          <p className="text-sm ">We develop professional websites for you.</p>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            type="button"
            className="rounded-md bg-yellow-500 px-3 py-2 text-xl text-sm font-semibold text-white shadow-sm hover:text-yellow-500 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-black text-yellow-500 text-xl px-3 py-2 text-sm font-semibold hover:text-white hover:bg-yellow-500"
          >
            {/* <a href={ResumePdf}>Resume</a> */}
            <ArrowUp className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="links flex">
          <a
            href="https://github.com/Ashfaque3777"
            className="text-yellow-500 bg-black rounded-full p-2 m-2  hover:text-white hover:bg-yellow-500"
          >
            <Github className=" h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/see-me"
            className="text-yellow-500 bg-black rounded-full p-2 m-2  hover:text-white hover:bg-yellow-500"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/ashfaque2506/"
            className="text-yellow-500 bg-black rounded-full p-2 m-2  hover:text-white hover:bg-yellow-500"
          >
            <Instagram className=" h-8 w-8" />
          </a>
        </div>
      </div>
      <div className="right relative h-[100%] w-[60%] flex items-center justify-center">
        <div className="yellow-circle h-[70%] w-[70%] bg-yellow-500 rounded-full z-1">
          {/* <img
            src={pic}
            className="h-[85%] w-[50%] absolute top-0 left-[28%]"
          /> */}
        </div>
        <div className="fsd h-[200px] w-[200px] rounded-full absolute bottom-0 right-0 z-0">
          <img src={Fsd} />
        </div>
      </div>
    </div>
  );
}
