import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';


function Portfolio() {
  return (
    <section id="portfolio" className='portfolio'>
      <HeaderContent
        headerText = "Portfolio"
        icon={<BsInfoCircleFill size={40}/>}

      />
    </section>
  )
}

export default Portfolio;