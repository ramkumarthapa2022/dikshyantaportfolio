import React, { useState } from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {FaGit, FaHtml5, FaNode} from "react-icons/fa"
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { MdExpandMore } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const Skills = () => {
  const [isExpanded,setIsExpanded]=useState(false)
  const toggleExpand=()=>{
    setIsExpanded((prevExpanded)=>!prevExpanded)
  }
  return (
    <><section id="skills" className="my-8 flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L40,48C80,96,160,192,240,192C320,192,400,96,480,96C560,96,640,192,720,197.3C800,203,880,117,960,101.3C1040,85,1120,139,1200,154.7C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" className="text-4xl font-bold sm:text-xl text-black">MY SKILLS</text>
      </svg>
      <ul className="flex flex-wrap gap-8 justify-center">
        <li className=" flex flex-row"><TbBrandJavascript className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pl-2  pt-0 sm:pt-2">JavaScript</p></li>
        <li className="flex flex-row"><RiReactjsLine className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2"> React.js</p></li>
        <li className="flex flex-row"><FaHtml5 className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">HTML5</p></li>
        <li className="flex flex-row"> <SiTailwindcss className="text-2xl sm:text-5xl" /> <p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2">CSS3</p></li>
        <li className="flex flex-row"><FaNode className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">Node.js </p></li>
        <li className="flex flex-row"><SiExpress className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2"> Express.js</p></li>
        <li className="flex flex-row"><DiResponsive className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2"> Responsive Web Design</p></li>
        <li className="flex flex-row"><FaGit className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">Version Control</p></li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L20,85.3C40,107,80,149,120,170.7C160,192,200,192,240,202.7C280,213,320,235,360,256C400,277,440,299,480,282.7C520,267,560,213,600,186.7C640,160,680,160,720,181.3C760,203,800,245,840,229.3C880,213,920,139,960,106.7C1000,75,1040,85,1080,85.3C1120,85,1160,75,1200,112C1240,149,1280,235,1320,240C1360,245,1400,171,1420,133.3L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
    </section><section id="myprojects" className="my-20 flex flex-col items-center min-h-[40vh] sm:min-h-[70vh]">
        <h2 className="text-3xl font-bold mb-16">Some of my Recent Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="flex">
            <div className="hover:scale-110">
              <img src="/works.jpg" alt="Project 1" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
              <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '' : 'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum, velit soluta facilis eos est distinctio saepe. Repellendus error quasi,
                ad nulla aut minima libero nihil sunt nobis quaerat esse.
                <button onClick={toggleExpand}><IoIosMore /></button>
              </p>
            </div>
            <div className="hover:scale-110">
              <img src="/works.jpg" alt="Project 2" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
              <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '' : 'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo pariatur repellendus
                ipsam velit iste architecto, illo eos. Dicta, esse! Reprehenderit animi, corporis fugit quidem cum labore suscipit ab voluptas.
                <button onClick={toggleExpand}><IoIosMore /></button></p>
            </div>
            <div className="hover:scale-110">
              <img src="/works.jpg" alt="Project 3" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
              <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '' : 'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
                mollitia aliquid molestiae eos hic, aspernatur nam nihil porro sint! Tempora ab reiciendis et dolor commodi magni distinctio blanditiis ullam.
                <button><IoIosMore /></button></p>
            </div>
          </div>
          <button className="mt-10 text-3xl flex flex-col items-center">
            Browse for more
            <MdExpandMore className="" />
          </button>
        </div>
      </section></>
  )
}

export default Skills