"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        {/* image */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition:{ delay: 2.4, duration: 0.4, ease: "easeInOut"}
         }}
          className="size-[298px] xl:size-[498px]  mix-blend-lighten absolute"
       >
            <Image
              src="/assets/myProfilepic.png"
              priority
              quality={100}
              fill
              className="object-contain lg:mt-6 lg:ml-5 rounded-full"
              alt="profile"
            />
         
       </motion.div>
       {/* circle */}
       <motion.svg
         className="size-[300px] xl:size-[560px]"
         fill="transparent"
         viewBox="0 0 506 506"
         xmlns="http://www.w3.org/2000/svg"
       >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="blue"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0"}}
            animate={{
                strokeDasharray: ["15  120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
            }}
          />
       </motion.svg>
    </div>
  )
}

export default Photo