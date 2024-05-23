import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Services() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <main className=' my-5 text-white font-sora font-semibold text-2xl'> 
        <h1 className='font-sora text-3xl font-semibold mb-4 text-black'>SERVICES</h1>
          <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1000} >
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

