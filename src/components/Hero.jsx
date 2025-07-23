import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailBtn from './EmailBtn';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id='home' className=" text-white max-w-6xl mx-auto min-h-170 flex flex-col lg:flex-row items-center justify-between px-4 py-12 lg:py-0">
      <div
        className={`w-full lg:w-1/2 text-start transition-all duration-1000 ease-out transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
      >
        <div className="mb-4">
          <p className="text-blue-400 text-2xl font-medium pt-10 md:pt-5">Hey there!, I'm-</p>
          <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mt-2">
            Kuntak Barik<span className="text-white">.</span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-400 font-semibold mt-4">
          <span className="text-gray-300">Development enthusiast focused on solving problems through efficient coding, design, and implementation.</span>
        </p>

        <div className="mt-6 md:text-xl space-y-2">
          <p className="text-gray-400 flex justify-start items-center gap-2">
            🚀 Learning React.js & Tailwind CSS
          </p>
          <p className="text-gray-400  md:text-xl flex justify-start items-center gap-2">
            💼 Actively seeking Frontend or Software Developer roles
          </p>
        </div>

        <div className="flex justify-start gap-4 mt-8 flex-wrap">
          <a
            href="./updated-resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-900 px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300 font-semibold"
          >
            📄 Resume
          </a>
          <a
            target='_blank'
            href="https://github.com/galacktuskb"
            className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub className='text-blue-400' /> Github
          </a>
          <a
            target='_blank'
            href="https://www.linkedin.com/in/kuntal-barik-26a977237/"
            className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <FaLinkedin className='text-blue-400' /> LinkedIn
          </a>
          <EmailBtn />
        </div>
      </div>

      <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 transition-all duration-1000 ease-out transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg font-mono">
          <pre className="text-sm md:text-base whitespace-pre-wrap">
            <code>
              <span className="text-purple-400">const</span> <span className="text-blue-400">coder</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">{"{"}</span>{'\n'}
              <span className="text-gray-400 ml-4">name:</span> <span className="text-green-400">'Kuntal Barik'</span>,{'\n'}
              <span className="text-gray-400 ml-4">skills:</span> <span className="text-yellow-400">[</span><span className="text-green-400">'React.Js'</span>, <span className="text-green-400">'NodeJS'</span>, <span className="text-green-400">'Redux'</span>, <span className="text-green-400">'Express'</span>, <span className="text-green-400">'NestJS'</span>,{'\n'}
              <span className="text-green-400 ml-8">'MySql'</span>, <span className="text-green-400">'MongoDB'</span>, <span className="text-green-400">'Docker'</span>, <span className="text-green-400">'AWS'</span><span className="text-yellow-400">]</span>,{'\n'}
              <span className="text-gray-400 ml-4">hardWorker:</span> <span className="text-blue-400">true</span>,{'\n'}
              <span className="text-gray-400 ml-4">quickLearner:</span> <span className="text-blue-400">true</span>,{'\n'}
              <span className="text-gray-400 ml-4">problemSolver:</span> <span className="text-blue-400">true</span>,{'\n'}
              <span className="text-gray-400 ml-4">hireable:</span> <span className="text-purple-400">function</span><span className="text-yellow-400">()</span> <span className="text-yellow-400">{"{"}</span>{'\n'}
              <span className="text-purple-400 ml-8">return</span> <span className="text-yellow-400">(</span>{'\n'}
              <span className="text-gray-400 ml-12">this.</span><span className="text-blue-400">hardWorker</span> <span className="text-gray-400">&&</span>{'\n'}
              <span className="text-gray-400 ml-12">this.</span><span className="text-blue-400">problemSolver</span> <span className="text-gray-400">&&</span>{'\n'}
              <span className="text-gray-400 ml-12">this.</span><span className="text-blue-400">skills</span><span className="text-gray-400">.</span><span className="text-blue-400">length</span> <span className="text-gray-400">&gt;=</span> <span className="text-orange-400">5</span><br />
              <span className="text-yellow-400 ml-8">);</span>{'\n'}
              <span className="text-yellow-400 ml-4">{"}"}</span>{'\n'}
              <span className="text-yellow-400">{"}"}</span><span className="text-gray-400">;</span>
            </code>
          </pre>
          <div className="mt-4 text-white">
            <p className="text-blue-400">// Output:</p>
            <p className="text-green-400">{`> ${true}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;