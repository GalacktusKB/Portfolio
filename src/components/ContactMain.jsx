import React from "react";
import { Mail, FileText } from "lucide-react";
import { FaLinkedin } from 'react-icons/fa';
import EmailBtn from './EmailBtn';

const ContactMain = () => {
  return (
    <section className=" text-white text-center px-4 lg:pt-50 py-25">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Keep In Touch.</h2>
      <p className="text-gray-400 mb-2">
        I'm currently specializing in <span className="text-blue-400 font-semibold">Front-end Development</span>.
      </p>
      <p className="text-gray-400 mb-10">
        Feel free to get in touch and talk more about your projects.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="https://www.linkedin.com/in/abhinaba-mukherjee-13589624a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <FaLinkedin className="w-5 h-5 text-blue-400" /> LinkedIn
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinaba2048@gmail.com"
          className="flex items-center gap-2 bg-gray-900 px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          <Mail className="w-5 h-5 text-blue-400" /> Email
        </a>
        {/* <EmailBtn/> */}

        <a
          href="/updated-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <FileText className="w-5 h-5 text-blue-400" /> Resume
        </a>
      </div>
    </section>
  );
};

export default ContactMain;
