import ProjectCard from "./ProjectCard";
import ecommerce from "../assets/ecommerce.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Project() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".cards", {
      opacity: 0,
      y: 200,
      duration: 3,
      stagger: 1,
    });
  });

  return (
    <div className="project relative h-[100vh] w-[100%] pt-20 pl-10 bg-gradient-to-r from-[#a0e9d089] to-[#77bedac8]">
      <h1 className="text-2xl font-bold pb-3 mr-4 border-b-4 border-solid border-yellow-500">
        My Projects
      </h1>
      <h2>Here are some of my projects..</h2>
      <div className="cards h-[75%] w-[70%] absolute left-[15%] flex items-center justify-around flex-wrap">
        <ProjectCard
          name="E-Commerce"
          img={ecommerce}
          para="In here we will help you to shape and build your ideal body and live up your life fullest."
        />
      </div>
    </div>
  );
}
