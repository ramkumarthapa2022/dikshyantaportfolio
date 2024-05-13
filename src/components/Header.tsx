import React, { useEffect, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

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
    <><header className={`sm:sticky items-end top-3 z-50 text-black py-4 rounded-full mx-2 my-4 px-3  ${scrolled ? 'transition-colors duration-1000 ease-in-out sm:bg-[#f8f7f1] ' : ''} ${issmscreen && showNav ? 'h-screen' : ''}`}>
          <nav className="container mx-auto flex flex-col md:flex-row mt-4 md:mt-0 md:order-1 md:flex md:items-center justify-between">
              <div className="flex flex-row justify-between">
                  <div className="text-black hover:underline hover:text-red-200">Dikshyanta Lamichhane</div>
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
                      <a href="#contact" className="text-md rounded-full px-2 text-black hover:underline hover:text-red-200">Contact</a>
                  </li>
                  <li className="hidden lg:block">
                      <a href="#contact" className="text-md border border-blue-600 rounded-full px-2 py-2 ml-8 text-black hover:bg-blue-300 ">Download CV</a>
                  </li>
              </ul>
          </nav>
      </header>
      <div className="my-20 p-10 flex flex-col md:flex-row items-center w-screen bg-cover justify-center bg-[url('/peakpx.jpg')]">
          <div className="md:w-1/2 flex justify-center">
              <img src="/1.jpg" alt="Dikshyanta" className="w-64 h-64 rounded-full" />
          </div>
          <div className="md:w-1/2 md:pl-8 text-white ">
              <h2 className="text-5xl font-bold mb-4 font-serif">Hi! I am </h2>
              <h1 className="text-6xl font-bold mb-4 font-playfair">Dikshyanta Lamichhane</h1>
              <p className="text-xl">
                  Welcome to my portfolio! I&apos;m Dikshyanta, a passionate web developer with expertise in frontend technologies such as React,
                  and backend technologies like Node.js. I have a keen interest in building
                  user-friendly and responsive web applications that provide seamless user experiences. In addition to web development,
                  I also enjoy exploring new technologies and learning about software architecture and design patterns.
              </p>
              <button onClick={handleSendMessage} className=" text-white border border-white font-bold px-4 py-2 mt-4 rounded-full hover:bg-blue-300 mr-10">Say Hello</button>
              <button className=" text-white border border-white font-bold px-4 py-2 mt-4 rounded-full hover:bg-blue-300">See Services</button>

          </div>

      </div><div className="flex flex-row ml-14 sm:ml-28 text-3xl">
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

              </div></>
  )
}

export default Header