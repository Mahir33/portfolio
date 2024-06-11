import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs'
const About = () => {
  return (
    <section id="about" className='about'>
      <HeaderContent
        headerText = "About Me"
        icon={<BsInfoCircleFill size={40}/>}

      />
    </section>
  )
}

export default About