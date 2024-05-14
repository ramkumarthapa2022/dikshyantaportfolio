import React from 'react';


const About = () => {
  
  return (
       <section id="about" className="my-8 h-90 p-10 flex flex-col bg-[#88888aa5] rounded ">
                <div className="flex flex-col md:flex-row justify-center items-center">
                  
                  <div className="pt-12">
                  <img src="/vectorstock_47056634.svg" alt="About" className=" min-h-[15vh] sm:min-h-[25vh] min-w-[40vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-2 rounded-full" />
                  </div>
                  
                  <div className="flex flex-col min-w-[50vw] px-8 pt-12 mr-4 items-start">
                    <h2 className="text-4xl font-bold mb-12 rounded-xl max-w-70 pl-2">About Me</h2>
                    <p className="text-lg text-gray-300 m-3">
                      Welcome to my portfolio! I&apos;m Dikshyanta, a passionate web developer with expertise in<span className="text-gray-700"> frontend technologies such as React,
                      and backend technologies like Node.js.</span> I have a keen interest in building user-friendly and responsive web applications that 
                      provide seamless user experiences. In addition to web development,
                      I also enjoy exploring new technologies and learning about software architecture and design patterns.
                    </p>
                    <a href="#contact" className=" m-1 border border-black font-bold px-4 py-2 rounded-full hover:bg-blue-300">Download CV</a>
                  </div>
                 
                </div>
              </section>
  )
}

export default About