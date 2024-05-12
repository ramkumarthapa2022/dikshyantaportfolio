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
          <h2 className="text-3xl font-bold mb-16">Blogs</h2>
          <div className="flex flex-wrap justify-center">
          <div className="flex">
          <div className="hover:scale-110">
              <img src="/works.jpg" alt="Project 1" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
          <p  className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum, velit soluta facilis eos est distinctio saepe. Repellendus error quasi,
             ad nulla aut minima libero nihil sunt nobis quaerat esse.
             <button onClick={toggleExpand}><IoIosMore/></button></p>
             </div>
          <div className="hover:scale-110"> 
              <img src="/works.jpg" alt="Project 2" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
              <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo pariatur repellendus
               ipsam velit iste architecto, illo eos. Dicta, esse! Reprehenderit animi, corporis fugit quidem cum labore suscipit ab voluptas.
               <button onClick={toggleExpand}><IoIosMore/></button></p>
          </div>
          <div className="hover:scale-110">
            <img src="/works.jpg" alt="Project 3" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
        <p className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
         mollitia aliquid molestiae eos hic, aspernatur nam nihil porro sint! Tempora ab reiciendis et dolor commodi magni distinctio blanditiis ullam.
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