'use client'
import Header from "@/components/Header";
import About from "@/components/about";
import Skills from "@/components/skills";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Projects from "@/components/projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Default to light mode

  // Effect for checking dark mode preference on mount
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setBackgroundColor(darkModeQuery.matches ? 'black' : 'white');

    const handleColorSchemeChange = (e:any) => {
      setBackgroundColor(e.matches ? 'black' : 'white');
    };

    darkModeQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      darkModeQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);
  // useEffect(() => {
  //   const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   setIsDarkMode(darkModeQuery.matches);
  // }, []);
  return (

    <div className={`min-h-screen flex flex-col justify-center` } >
      <div id="home" className={`m-2  rounded-t-xl`}>
        <Header/>
          <div className="flex justify-center">
              <main className="container py-8 flex flex-col">
                  <About/>
                  <Skills/>
                  <Projects/>
                  <Blogs/>
                  <Contact/>
              </main>
          </div>
        
        <Footer/>
      </div>
    </div>
  );
}
