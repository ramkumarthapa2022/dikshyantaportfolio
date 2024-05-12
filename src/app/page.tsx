'use client'
import Header from "@/components/Header";
import About from "@/components/about";
import Skills from "@/components/skills";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div id="home" className='m-2 bg-[#f8f7f1] rounded-t-xl'>
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
