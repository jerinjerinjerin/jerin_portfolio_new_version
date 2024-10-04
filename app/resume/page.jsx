"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a full stack web developer with a passion for creating beautiful and intuitive user interfaces. I have a strong background in web development and have worked with a variety of technologies including HTML, CSS, JavaScript, React, Next.js, Node.js, and MongoDB.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jerin Raj",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 801 575 2367",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "jerin raj",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "jerinr906@gmail.com",
    },
    {
      fieldName: "Web dovelopment",
      fieldValue: "Avaliable",
    },
    {
      fieldName: "Languages",
      fieldValue: "Tamil, medium English",
    },
  ],
};

const expreience = {
  icoan: "/assets/resume/jerin_resume.svg",
  title: "My experiences",
  description:
    "I am a full stack web developer with a passion for creating beautiful and intuitive user interfaces. I have a strong background in web development and have worked with a variety of technologies including HTML, CSS, JavaScript, React.js, Tailwind.css,  Next.js, Node.js, and MongoDB.",

  items: [
    {
      company: "Enterkey Soluction",
      position: "Full Stack Developer",
      duration: "03/07/2024 - Current",
    },
    {
      company: "Pamz3d design India PVT LTD",
      position: "Junior Programmer",
      duration: "16/06/2023 - 31/05/2024",
    },
   
    {
      company: "Laptops and mobile servece",
      position: "Freelance web dovelopment",
      duration: "01/01/2023 - 15/03/2023",
    },
      
  ],
};

const education = {
  icoan: "/assets/resume/jerin_resume.svg",
  title: "My education",
  description:
    "Currently pursuing a B.Sc. in Computer Science at Bharathidasan University (Distance education), I have one year of experience with the MERN stack, Next.js, and Tailwind CSS. My academic background and technical skills enable me to build efficient, responsive web applications while excelling in collaborative environments",

  items: [
    {
      institution: "Currently pursuing B.Sc. Computer Science (Distance education)",
      degree: "undergraduate",
      duration: "2023 - current",
    },

    {
      institution: "Appin Institue",
      degree: "Certified FullStack Doveloper",
      duration: "2023",
    },
    {
      institution: "Online Courses Platform",
      degree: "MERN Stack Web Dovelopment BootCamp",
      duration: "2023",
    },
    {
      institution: "Youtube Course",
      degree: "Html,Css,Javascript Basic Course",
      duration: "2022",
    },
    
    {
      institution: "Udaya Polytechnic Collage",
      degree: "Diploma in Mechanical engineering 2 years Complected",
      duration: "2017-2019",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "With one year of experience in the MERN stack, Next.js, and Tailwind CSS, I bring strong full-stack development skills. My proficiency in these technologies enables me to build responsive, efficient, and scalable web applications. I excel in creating seamless user experiences and maintaining clean, maintainable code",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiMongodb />,
      name: "mongo.db",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="expreience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="expreience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="expreience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expreience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                 {expreience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expreience.items.map((item, index)=> {
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 
                          px-10 rounded-xl flex flex-col justify-center 
                          items-center lg:items-start gap-1">
                          <span className="text-blue-700"
                          >{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] 
                          text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-700">

                            </span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                 {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 
                          px-10 rounded-xl flex flex-col justify-center 
                          items-center lg:items-start gap-1">
                          <span className="text-blue-700"
                          >{item.duration}</span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] 
                          text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-700">

                            </span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                            rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-blue-700
                              transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                    mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start
                      gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
