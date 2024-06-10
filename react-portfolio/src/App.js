import './App.scss';
import { useEffect, useState } from "react";
import {Routes, Route, useLocation} from 'react-router-dom';

// Particles background: 
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particles from './utils/particles';

// components
import NavBar from './components/navBar/NavBar.jsx';
import HeaderContent from './components/headerContent/HeaderContent.jsx';

// containers
import Home from './containers/home/Home.jsx';
import About from './containers/about/About.jsx';
import Resume from './containers/resume/Resume.jsx';
import Skills from './containers/skills/Skills.jsx';
import Portfolio from './containers/portfolio/Portfolio.jsx';
import Contact from './containers/contact/Contact.jsx';

function App() {

  //Particles
  const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
      console.log(container);
  };

  const location = useLocation();
  console.log(location.pathname);
  
  const renderParticleHomeOnly = location.pathname === "/";
  // Particles End

  return (
    <div className="App">

    {/* Particles Start */}

    {
      renderParticleHomeOnly ?
      <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particles} 
      />
      : null 
    }
   
    {/* Particles END */}

    


      <NavBar />

      
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
