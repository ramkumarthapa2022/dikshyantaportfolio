import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <section id="about" className="my-8 h-90 p-10 flex flex-col bg-[#707071] rounded-xl ">
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
    )
  }
}

export default about