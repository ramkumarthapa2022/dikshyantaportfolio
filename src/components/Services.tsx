import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <main className='text-center my-5'> 
        <h1 className='font-sora text-3xl font-semibold mb-4'>SERVICES</h1>
        <section className='text-white font-sora font-semibold text-2xl flex justify-center'>
        <Carousel responsive={responsive} className='flex justify-center'>
            <div className={` bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`} >
              <p className=' ml-3 mt-5 shadow-xl'>Web Design</p>
            </div>
            <div className={`bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>
              <p className=' ml-3 mt-5 shadow-xl'>Database</p>
            </div>
            <div className={`bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/typer.jpg')]`}>

              <p className='ml-3 mt-5 shadow-xl'>Deployment</p>
            </div>
            <div className={`bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/stars')]`}>

              <p className='ml-3 mt-5 shadow-xl'>API</p>
            </div>
            <div className={`bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>

              <p className=' ml-3 mt-5 shadow-xl'>SEO</p>
            </div>
            <div className={`bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>

              <p className=' ml-3 mt-5 shadow-xl'>Data Entry</p>
            </div>
            <div className={`bg-[#4D869C] my-3 flex flex-row rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>

              <p className=' ml-3 mt-5 shadow-xl'>Logo</p>
            </div>
        </Carousel>
        </section>
        
    </main>
  )
}

export default Services

