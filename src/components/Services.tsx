import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      breakpoint: { max: 1024, min: 460 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1
    }
  };
  
  return (
    <main className=' my-5 text-white font-sora font-semibold text-2xl'> 
        <h1 className='font-sora text-3xl font-semibold mb-4 text-black'>SERVICES</h1>
          <Carousel responsive={responsive}>
            <div className={` bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`} >
              <p className=' ml-3 mt-5 shadow-xl'>Web Design</p>
            </div>
            <div className={`bg-[#4D869C] my-3  rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>
              <p className=' ml-3 mt-5 shadow-xl'>Database</p>
            </div>
            <div className={`bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover bg-[url('/typer.jpg')]`}>

              <p className='ml-3 mt-5 shadow-xl'>Deployment</p>
            </div>
            <div className={`bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover bg-[url('/stars.jpg')]`}>

              <p className='ml-3 mt-5 shadow-xl'>API</p>
            </div>
            <div className={`bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>

              <p className=' ml-3 mt-5 shadow-xl'>SEO</p>
            </div>
            <div className={`bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>

              <p className=' ml-3 mt-5 shadow-xl'>Data Entry</p>
            </div>
            <div className={`bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover bg-[url('/design.jpg')]`}>

              <p className=' ml-3 mt-5 shadow-xl'>Logo</p>
            </div> 
            </Carousel>

        
    </main>
  )
}

export default Services

