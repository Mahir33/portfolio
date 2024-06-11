import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './home.scss';

function Home() {

  const navigate = useNavigate();

  const handleNavToContact = () => {
    navigate("/contact")
  }


  return (
    <section id="home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Adam
          <br/>
          A Web Developer
        </h1>
      </div>
      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: 'translateY(550px)'
        }}
        end={{
          transform: 'translateY(0px)'
        }}
      >
        <div className='home__contact'>
          <button onClick={handleNavToContact}>Contact me!</button>
        </div>
      </Animate>
    </section>
  )
}

export default Home;