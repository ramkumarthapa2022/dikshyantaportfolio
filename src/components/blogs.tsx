import React, { useState } from 'react';
import { IoIosMore } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";

const Blogs = () => {
  const [isExpanded,setIsExpanded]=useState(false)
  const toggleExpand=()=>{
    setIsExpanded((prevExpanded)=>!prevExpanded)
  }
  return (
    <section id="blogs" className="my-20 flex flex-col items-center min-h-[70vh]">
          <h2 className="text-3xl font-bold mb-16">BLOGS</h2>
          <div className="flex flex-wrap justify-center">
          <div className="flex mx-5">
              <div className=" bg-slate-100 rounded-2xl hover:scale-110 mx-3 felx items-center justify-center">
                <img src="/vectorstock_43756153.svg" alt="Project 1" className="w-1/3 min-h-[15vh] sm:min-h-[25vh] min-w-[25vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-2 rounded-2xl" />
                  <p  className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum, dolor sit amet
                  <button onClick={toggleExpand}><IoIosMore/></button></p>
              </div>
              <div className="bg-slate-100 rounded-2xl hover:scale-110 mx-3"> 
                <img src="/vectorstock_47056578.svg" alt="Project 2" className="w-1/3 min-h-[15vh] sm:min-h-[25vh] min-w-[25vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-2 rounded-2xl" />
                  <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum dolor sit amet
                  <button onClick={toggleExpand}><IoIosMore/></button></p>
              </div>
              <div className="bg-slate-100 rounded-2xl hover:scale-110 mx-3">
                <img src="/next.svg" alt="Project 3" className="w-1/3 min-h-[15vh] sm:min-h-[25vh] min-w-[25vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-2 rounded-2xl" />
                  <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>  Lorem ipsum dolor sit amet
                 <button onClick={toggleExpand}><IoIosMore/></button></p>
              </div>
          </div>
          <button className="mt-10 text-3xl flex flex-col items-center">
            Browse for more
            <MdExpandMore className=""/>
          </button>
          </div>
        </section> 
  )
}

export default Blogs