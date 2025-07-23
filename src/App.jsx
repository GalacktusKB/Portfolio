import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './index.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFount from "./components/PageNotFount";
import AboutMain from "./components/AboutMain";
import ProjectsMain from "./components/ProjectMain";
import ContactMain from "./components/ContactMain";
import Gradient from "./components/GradientBackground";



function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <div>
          <Navbar />
          <Hero />
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      },
      {
        path: '/about',
        element: <div>
          <Navbar />
          <AboutMain/>
          <Footer/>
        </div>
      },
      {
        path: '/projects',
        element: <div>
          <Navbar />
          <ProjectsMain/>
          <Footer/>
        </div>
      },
      {
        path: '/contact',
        element: <div>
         <Navbar />
         <ContactMain/>
         <Footer/>
        </div>
      },
      {
        path: '*',
        element: <PageNotFount/>
      }
    ]
  );
  


  return (
    <div >
      <Gradient />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
