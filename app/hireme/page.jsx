"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

const hairMe = [
    {
        question: "What technologies do you specialize in as a full-stack developer?",
        answer: "I specialize in a variety of technologies, including front-end frameworks like React and Next.js, back-end environments such as Node.js, and databases like MongoDB and PostgreSQL. My goal is to create seamless, user-friendly applications."
    },
    {
        question: "How do you approach debugging an application?",
        answer: "My debugging approach involves systematically isolating the problem. I use console logging, debugging tools, and unit tests to track down issues. I also review recent code changes and utilize source control to identify potential errors."
    },
    {
        question: "Can you explain the concept of RESTful APIs?",
        answer: "RESTful APIs follow the principles of Representational State Transfer, using standard HTTP methods like GET, POST, PUT, and DELETE to manage resources. They are stateless and allow for efficient communication between the client and server, enabling a clear separation of concerns."
    },
    {
        question: "What is your experience with version control systems?",
        answer: "I have extensive experience with Git, which I use for version control. I am comfortable with branching, merging, and resolving conflicts. I also utilize platforms like GitHub and GitLab for collaboration and project management."
    },
    {
        question: "How do you ensure the security of your applications?",
        answer: "I implement security best practices such as input validation, authentication, and authorization measures. Additionally, I regularly update dependencies, conduct code reviews, and use tools for static analysis to identify vulnerabilities."
    }
];

const Page = () => {
  // State to track the currently opened question index
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    // Toggle the answer visibility
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='container mb-5'>
        <div className="flex flex-col gap-5 md-[80%] w-full items-center justify-center">
            <h1 className='font-semibold md:text-[40px] text-[20px] text-blue-600'>
              Hello, I'm Jerin Raj, Full-Stack Developer
            </h1>
            <p className='text-white md:text-lg text-sm py-5'>
              With a passion for coding and a knack for solving complex problems, I am a full-stack developer ready to tackle your next project. Below is a selection of questions and answers that showcase my expertise.
            </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
            {hairMe.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col gap-5 w-full md:w-[90%] items-center justify-center border-2 border-blue-600 p-4 rounded-lg mb-4" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                    <h3 
                      className='text-lg md:text-2xl text-blue-700 cursor-pointer' 
                      onClick={() => toggleAnswer(index)}
                    >
                      {item.question}
                    </h3>
                    {openIndex === index && (
                      <div className='border-2 border-blue-300 p-3 rounded-lg'>
                        <p className='text-white md:text-lg text-sm'>
                          {item.answer}
                        </p>
                      </div>
                    )}
                </motion.div>
            ))}
        </div>
    </div>
  );
}

export default Page;
