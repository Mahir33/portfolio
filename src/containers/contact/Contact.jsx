import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';


function Contact() {
  return (
    <section id="contact" className='contact'>
      <HeaderContent
        headerText = "Contact"
        icon={<BsInfoCircleFill size={40}/>}

      />
    </section>
  )
}

export default Contact;