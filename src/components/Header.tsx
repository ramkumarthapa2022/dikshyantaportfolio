import React, { useEffect, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import {FaArrowAltCircleRight, FaChartBar, FaEnvelope, FaFacebook, FaFolderOpen, FaHome, FaInstagram, FaLinkedin, FaNewspaper, FaOpencart, FaPhone, FaTwitter, FaUser} from "react-icons/fa";
import { FaHand } from 'react-icons/fa6';


const Header = () => {
    const [showNav,setShowNav]=useState(false)
    const [isshowmenu,setshowmenu]=useState(false)
    const [issmscreen]=useState(false)
    const closeMenu=()=>{
        setshowmenu(false)
        setShowNav(false)
      }
      const toogleMenu = () => {
        setshowmenu(!isshowmenu)
        setShowNav(true)
      }
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
      const handleSendMessage = () => {
        window.open('https://www.facebook.com/messages/t/100065000725712', '_blank','noopener,noreferrer');
      };
  return (
    <><main className=" rounded">
        <header className={`sm:sticky items-end top-3 z-50 py-4 mx-2 px-3  ${scrolled ? 'transition-colors duration-1000 ease-in-out ' : ''} ${issmscreen && showNav ? 'h-screen' : ''}`}>
          <nav className="container mx-auto flex flex-col md:flex-row mt-4 md:mt-0 md:order-1 md:flex md:items-center justify-between">
              <div className="flex flex-row justify-between">
                  <div className="font-bold font-sora hover:underline hover:text-red-200">DIKSHYANTA LAMICHHANE</div>
                  {issmscreen && (
                      <div className="sm:hidden">
                          {!isshowmenu ? (
                              <button onClick={toogleMenu}>
                                  <CiMenuBurger className="text-3xl pr-2" />
                              </button>
                          ) : (
                              <div className="mb-6 pr-2">
                                  <button onClick={closeMenu}>
                                      <IoClose className="text-3xl" />
                                  </button>
                              </div>
                          )}


                      </div>
                  )}
              </div>

              <ul className={` sm:flex flex-col  md:flex-row md:space-x-10 ${showNav || !issmscreen ? '' : 'hidden'}`}>
                  <li>
                    
                    <a href="#home" className="hover:underline  hover:text-red-200 ">
                    <FaHome className="lg:hidden"/><p className='hidden lg:block'>Home</p></a>
                  </li>
                  <li>
                  
                  <a href="#skills" className="hover:underline hover:text-red-200"><FaChartBar className="lg:hidden"/><p className='hidden lg:block'>Skills</p></a>
                  </li>
                  <li>
                  
                  <a href="#myprojects" className="hover:underline hover:text-red-200"><FaFolderOpen className="lg:hidden"/><p className='hidden lg:block'>Projects</p></a>
                  </li>
                  <li>
                  
                  <a href="#blogs" className="hover:underline hover:text-red-200"><FaNewspaper className="lg:hidden"/><p className='hidden lg:block'>Blog</p></a>
                  </li>
                  <li>
                  
                  <a href="#about" className="hover:underline hover:text-red-200"><FaUser className="lg:hidden"/><p className='hidden lg:block'>About</p></a>
                  </li>
                  <li>
                      <a href="#contact" className="hover:underline hover:text-red-200"><FaEnvelope className="lg:hidden"/><p className='hidden lg:block'>Contact</p></a>
                  </li>
              </ul>
          </nav>
      </header>
      <div className="p-10 flex flex-col md:flex-row items-center w-screen bg-cover justify-center ">
          <div className="md:w-1/2 flex justify-center">
              <img src="/public/1.jpg" alt="Dikshyanta" className="w-64 h-64 rounded-full" />
          </div>
          <div className="md:w-1/2 md:pl-8">
              <h2 className="text-5xl font-bold mb-4 font-serif">Hi! I am </h2>
              <h1 className="text-6xl font-bold mb-4 font-playfair">Dikshyanta Lamichhane</h1>
              <h2 className="text-3xl font-sora mb-4 ">Software Developer</h2>
              <p className="text-xl">
                  Welcome to my portfolio! I&apos;m Dikshyanta, a passionate web developer with expertise in frontend technologies such as React,
                  and backend technologies like Node.js.
              </p>
              <div className="flex items-center space-x-4 my-5">

                <button onClick={handleSendMessage} className="border-2 shadow-2xl font-bold px-4 py-2 rounded-full hover:bg-blue-300">
                    <span className="flex items-center">
                        Say Hello <FaHand className="ml-2" />
                    </span>
                </button>

                <button className="border-2 shadow-2xl font-bold px-4 py-2 rounded-full hover:bg-blue-300">
                    <span className="flex items-center">
                        See Services <FaArrowAltCircleRight className="ml-2" />
                    </span>
                </button>
        </div>
          </div>

      </div>
      <div className="flex flex-row  ml-14 sm:ml-28 text-3xl">
                  <a href="https://www.facebook.com/dikshyanta.lamichhane.94">
                      <FaFacebook className="mr-10 sm:mr-5" />
                  </a>
                  <a href="https://www.instagram.com/uy_sagittarius_a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <FaInstagram className="mr-10 sm:mr-5" />
                  </a>
                  <a href="https://twitter.com/DikshyantaLami3">
                      <FaTwitter className="mr-10 sm:mr-5" />
                  </a>
                  <a href="#">
                      <FaLinkedin className="mr-10 sm:mr-5" />
                  </a>

              </div>
              </main>
              </>
  )
}

export default Header