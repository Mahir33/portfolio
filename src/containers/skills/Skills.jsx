import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';


function Skills() {
  return (
    <section id="skills" className='skills'>
      <HeaderContent
        headerText = "Skills"
        icon={<BsInfoCircleFill size={40}/>}

      />
    </section>
  )
}

export default Skills;