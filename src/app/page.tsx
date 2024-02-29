'use client'
import React from 'react';

export default function Home() {
  const handleSendMessage = () => {
    window.open('https://www.facebook.com/messages/t/100065000725712', '_blank','noopener,noreferrer');
  };

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-center">
      <div id="home" className='m-8'>
        {/* Header */}
        <header className="bg-blue-500 text-white py-4 rounded-t-3xl">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Dikshyanta's Portfolio</h1>
            <nav className="mt-4">
              <ul className="flex flex-col md:flex-row md:space-x-16">
                <li><a href="#home" className="text-white hover:underline block">Home</a></li>
                <li><a href="#blog" className="text-white hover:underline block">Blog</a></li>
                <li><a href="#myprojects" className="text-white hover:underline block">Projects</a></li>
                <li><a href="#skills" className="text-white hover:underline block">Skills</a></li>
                <li><a href="#about" className="text-white hover:underline block">About</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Image and Introduction */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src="/1.jpg" alt="Dikshyanta" className="w-64 h-64 rounded-full" />
          </div>

          {/* Introduction */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-lg">
              Welcome to my portfolio! I'm Dikshyanta, a passionate web developer with expertise in frontend technologies such as React,
               and backend technologies like Node.js. I have a keen interest in building
               user-friendly and responsive web applications that provide seamless user experiences. In addition to web development,
               I also enjoy exploring new technologies and learning about software architecture and design patterns.
            </p>
            <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">Say Hello</button>
          </div>
        </div>

        {/* Main content */}
        <main className="container mx-auto py-8">
          <section id="about" className="my-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-center">
              Welcome to my portfolio! I'm Dikshyanta, a passionate web developer with expertise in frontend technologies such as React,
               and backend technologies like Node.js. I have a keen interest in building user-friendly and responsive web applications that 
               provide seamless user experiences. In addition to web development,
               I also enjoy exploring new technologies and learning about software architecture and design patterns.
            </p>
          </section>
          <section id="skills" className="my-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside text-lg">
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>HTML5 & CSS3</li>
              <li>Node.js & Express.js</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git)</li>
            </ul>
          </section>
          <section id="myprojects" className="my-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="flex flex-wrap justify-center">
            <img src="/1.jpg" alt="Project 1" className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4" />
            <img src="/1.jpg" alt="Project 2" className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4" />
            <img src="/1.jpg" alt="Project 3" className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4" />
            <img src="/1.jpg" alt="Project 4" className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 h-auto my-4 sm:mx-4" />
          </div>
        </section>



        </main>

        {/* Footer */}
        <footer className="bg-blue-500 py-4 text-center rounded-b-3xl">
          <p>&copy; {new Date().getFullYear()} Dikshyanta. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
