'use client'
import React,{ useEffect, useState } from "react";
import { CiEdit, CiMail, CiMenuBurger } from "react-icons/ci";
import {FaFacebook, FaGit, FaHtml5, FaInstagram, FaLinkedin, FaNode, FaTwitter} from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { MdExpandMore } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { BiFontFamily } from "react-icons/bi";
export default function Home() {
  const [showNav,setShowNav]=useState(false)
  const [isshowmenu,setshowmenu]=useState(false)
  const [issmscreen,setsmscreen]=useState(false)
  const [isExpanded,setIsExpanded]=useState(false)
  const toggleExpand=()=>{
    setIsExpanded((prevExpanded)=>!prevExpanded)
  }
  const closeMenu=()=>{
    setshowmenu(false)
    setShowNav(false)
  }
  const toogleMenu = () => {
    setshowmenu(!isshowmenu)
    setShowNav(true)
  }
  const handleResize=()=>{
    setsmscreen(window.innerWidth<=640)
  }
  useEffect(()=>{
      setsmscreen(window.innerWidth<=640);
    
    window.addEventListener('resize',handleResize)
  return ()=>{
    window.removeEventListener('resize',handleResize)
  }
  },[])
  const handleSendMessage = () => {
    window.open('https://www.facebook.com/messages/t/100065000725712', '_blank','noopener,noreferrer');
  };
const [scrolled,setScrolled]=useState(false);
useEffect(()=>{
  const handleScroll=()=>{
    const isScrolled=window.scrollY>40
    if(isScrolled!==scrolled){
      setScrolled(isScrolled)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[scrolled])
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div id="home" className='m-2 bg-[#f8f7f1] rounded-t-xl'>
        
      <header className={`sm:sticky items-end top-3 z-50 text-black py-4 rounded-full mx-2 my-4 px-3  ${scrolled ? 'transition-colors duration-1000 ease-in-out sm:bg-[#f8f7f1] ':''} ${issmscreen && showNav ? 'h-screen':''}`}>
            <nav className="container mx-auto flex flex-col md:flex-row mt-4 md:mt-0 md:order-1 md:flex md:items-center justify-between">
                <div className="flex flex-row justify-between">
                <div className="text-black hover:underline hover:text-red-200">Dikshyanta Lamichhane</div>
                {issmscreen && (
                   <div className="sm:hidden">
                   {!isshowmenu ? (
                    <button onClick={toogleMenu}>
                    <CiMenuBurger className="text-3xl pr-2"/>
                </button>
                   ):(
                    <div className="mb-6 pr-2">
                      <button onClick={closeMenu}>
                      <IoClose className="text-3xl"/>
                    </button>
                   </div>
                   )}
                   
               
               </div>
              )
              }
              </div>
              
                <ul className={`sm:flex flex-col md:flex-row md:space-x-16 ${showNav || !issmscreen ? '' : 'hidden'}`}>
                    <li>
                        <a href="#home" className="text-green-800 hover:underline  hover:text-red-200">Home</a>
                    </li>
                    <li>
                        <a href="#skills" className="text-black hover:underline hover:text-red-200">Skills</a>
                    </li>
                    <li>
                        <a href="#myprojects" className="text-black hover:underline hover:text-red-200">Projects</a>
                    </li>
                    <li>
                        <a href="#blogs" className="text-black hover:underline hover:text-red-200">Blog</a>
                    </li>
                    <li>
                        <a href="#about" className="text-black hover:underline hover:text-red-200">About</a>
                    </li>
                    <li className="hidden lg:block">
                        <a href="#contact" className="text-md border rounded-full px-2 text-black hover:underline hover:text-red-200">Contact</a>
                    </li>
                    <li className="hidden lg:block">
                        <a href="#contact" className="text-md border bg-green-800 rounded-md px-3 py-4 ml-8 text-white hover:underline hover:text-red-200">Download CV</a>
                    </li>
                </ul>
            </nav>
        </header>



        <div className="container mx-auto my-20 flex flex-col md:flex-row items-center justify-center py-10 px-10">
          <div className="md:w-1/2 flex justify-center">
            <img src="/1.jpg" alt="Dikshyanta" className="w-64 h-64 rounded-full" />
          </div>
          <div className="md:w-1/2 md:pl-8 text-black">
            <h2 className="text-5xl font-bold mb-4 font-serif">Hi! I am </h2>
            <h1 className="text-6xl font-bold mb-4 font-playfair">Dikshyanta Lamichhane</h1>
            <p className="text-xl">
              Welcome to my portfolio! I&apos;m Dikshyanta, a passionate web developer with expertise in frontend technologies such as React,
               and backend technologies like Node.js. I have a keen interest in building
               user-friendly and responsive web applications that provide seamless user experiences. In addition to web development,
               I also enjoy exploring new technologies and learning about software architecture and design patterns.
            </p>
            <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-800 mr-10">Say Hello</button>
            <button  className="bg-blue-800 text-white px-4 py-2 mt-4 rounded hover:bg-blue-500">See Services</button>
          
          </div>

        </div>
        <div className="flex flex-row ml-14 sm:ml-28 text-3xl">
        <FaFacebook className="mr-10 sm:mr-5"/>
        <FaInstagram className="mr-10 sm:mr-5"/>
        <FaTwitter className="mr-10 sm:mr-5"/>
        <FaLinkedin />
             </div>   
             <div className="flex justify-center">
                <main className="container py-8 flex flex-col">
                  
                <section id="about" className="my-8 flex flex-col bg-[#1B2837] rounded-2xl ">
                <div className="flex flex-col md:flex-row justify-center items-center">
                  
                  <div className="pt-12 ">
                    <img src="/about.jpg" alt="About" className="ml-8 rounded-full " />
                  </div>
                  
                  <div className="min-w-[50vw] px-8 pt-12 mr-4">
                    <h2 className="text-3xl font-bold mb-12 rounded-xl bg-white max-w-40 pl-2">About Me</h2>
                    <p className="text-lg text-gray-300">
                      Welcome to my portfolio! I&apos;m Dikshyanta, a passionate web developer with expertise in<span className="text-gray-700"> frontend technologies such as React,
                      and backend technologies like Node.js.</span> I have a keen interest in building user-friendly and responsive web applications that 
                      provide seamless user experiences. In addition to web development,
                      I also enjoy exploring new technologies and learning about software architecture and design patterns.
                    </p>
                  </div>
                </div>
              </section>

          <section id="skills" className="my-8 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L40,48C80,96,160,192,240,192C320,192,400,96,480,96C560,96,640,192,720,197.3C800,203,880,117,960,101.3C1040,85,1120,139,1200,154.7C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle"  className="text-4xl font-bold sm:text-xl text-black">MY SKILLS</text>
    </svg>
            <ul className="flex flex-wrap gap-8 justify-center">
              <li className=" flex flex-row"><TbBrandJavascript className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pl-2  pt-0 sm:pt-2">JavaScript</p></li>
              <li className="flex flex-row"><RiReactjsLine className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2"> React.js</p></li>
              <li className="flex flex-row"><FaHtml5 className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">HTML5</p></li> 
              <li className="flex flex-row"> <SiTailwindcss className="text-2xl sm:text-5xl"/> <p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2">CSS3</p></li>
              <li className="flex flex-row"><FaNode className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">Node.js </p></li>
              <li className="flex flex-row"><SiExpress className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2"> Express.js</p></li>
              <li className="flex flex-row"><DiResponsive className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2"> Responsive Web Design</p></li>
              <li className="flex flex-row"><FaGit className="text-2xl sm:text-5xl"/><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">Version Control</p></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L20,85.3C40,107,80,149,120,170.7C160,192,200,192,240,202.7C280,213,320,235,360,256C400,277,440,299,480,282.7C520,267,560,213,600,186.7C640,160,680,160,720,181.3C760,203,800,245,840,229.3C880,213,920,139,960,106.7C1000,75,1040,85,1080,85.3C1120,85,1160,75,1200,112C1240,149,1280,235,1320,240C1360,245,1400,171,1420,133.3L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
          </section>
          <section id="myprojects" className="my-20 flex flex-col items-center min-h-[40vh] sm:min-h-[70vh]">
          <h2 className="text-3xl font-bold mb-16">Some of my Recent Projects</h2>
          <div className="flex flex-wrap justify-center">
          <div className="flex">
          <div className="hover:scale-110">
              <img src="/works.jpg" alt="Project 1" className="w-1/2 min-h-[20vh] sm:min-h-[40vh] min-w-[20vw] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4 rounded-2xl" />
          <p  className={`flex max-w-[20vw] text-left pl-4 ${isExpanded ? '':'overflow-hidden max-h-[3rem] sm:max-h-[2.9rem]'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum, velit soluta facilis eos est distinctio saepe. Repellendus error quasi,
             ad nulla aut minima libero nihil sunt nobis quaerat esse.
             <button onClick={toggleExpand}><IoIosMore/></button>
             </p>
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
         <button><IoIosMore/></button></p>
          </div>
          </div>
          <button className="mt-10 text-3xl flex flex-col items-center">
            Browse for more
            <MdExpandMore className=""/>
          </button>
          </div>
        </section>
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
      <section id="contact" className="my-8 flex flex-col bg-[#f8f7f1] md:flex-row items-start sm:items-center justify-between gap-4 sm:gap-16 min-h-[60vh] sm:min-h-screen">
        <div className="mr-2 sm:mr-8 max-w-[80vw] sm:max-w-[40vw] ml-2 sm:ml-16"> 
          <h2 className="border text-xl sm:text-5xl rounded-xl font-bold font-sans">CONTACT</h2>
          <p className="text-xl sm:text-5xl">Got a problem to solve?</p>
          <p className=" text-sm sm:text-xl">Get your suit ready and tell me <span className=" text-gray-400">your ideas to develop your dream website</span></p>
        </div>
        <div className="flex flex-col space-y-4 mr-16 min-w-[40vw] ">
          <input type="text" placeholder="Your Name" className="px-4 py-2 border border-gray-300 rounded-md " />
          <input type="email" placeholder="Your Email" className="px-4 py-2 border border-gray-300 rounded-md " />
          <textarea placeholder="Your Message" className="px-4 py-2 border border-gray-300 rounded-md"></textarea>
        <div className="flex flex-row items-center justify-between">  
        <button className="px-4 py-2 flex "><CiMail className="mr-1 pt-1 text-2xl"/> mailmewith@gmail.com</button>
        <button className="bg-white text-black px-4 py-2 rounded-md">Send Message</button>
          </div>
        </div>
      </section>


        </main>
        </div>
        <footer className=" bg-gray-600 py-4 text-center rounded-b-3xl text-white">
          <p>&copy; {new Date().getFullYear()} Dikshyanta. All rights reserved.</p>
        </footer>
      </div>
      </div>
  );
}
