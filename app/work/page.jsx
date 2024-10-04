"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  TooltipContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "project 1",
    description: "AI Powered Content Generator",
    stack: [{ name: "next.js" }, { name: "tailwind.css" }, { name: "clerk" }, {name:"gemini Ai"}, {name:"neon.db"}],
    image: "/assets/work/project_1.png",
    live: "https://jerin-ai-powerd-content-generator.vercel.app/",
    github:
      "https://github.com/jerinjerinjerin/ai-content-generator",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "finance app",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "clerk" }],
    image: "/assets/work/project_2_03.png",
    live: "",
    github: "https://github.com/jerinjerinjerin/finance-app",
  },
  {
    num: "03",
    category: "Mern stack",
    title: "project 3",
    description: "mern crud",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Mongodb.db" }],
    image: "/assets/work/project_3_02.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-5">
              {/* Outline none */}
              <div
                className="text-8xl leading-none font-semibold text-transparent text-outline"
              >
                {project.num}
              </div>
              {/* Project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-blue-700">
                    {item.name}
                    {/* Remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="size-70px rounded-full p-2 bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-white text-3xl group-hover:text-blue-700"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="size-70px rounded-full p-2 bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl group-hover:text-blue-700"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover flex h-full w-full"
                        alt="project images"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-blue-700 hover:bg-blue-500 text-black text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
