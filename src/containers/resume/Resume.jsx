import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';


function Resume() {
  return (
    <section id="resume" className='resume'>
      <HeaderContent
        headerText = "Resume"
        icon={<BsInfoCircleFill size={40}/>}

      />
    </section>
  )
}

export default Resume;