import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';

import {  DiReact, DiJavascript1 } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

import './about.scss';

const About = () => {

  const myDetails = [
    {
      label: "Name",
      value: "Adam Wrobel",
    },
    {
      label: "Age",
      value: new Date().getFullYear() - 1986,
    },
    {
      label: "Address",
      value: "Berlin, Germany",
    },
    {
      label: "Email",
      value: "adem.wrobel@gmail.com",
    },
    {
      label: "Contact Number",
      value: "+49 176 41677609",
    },
  ];

  const jobSummary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, purus in tincidunt elementum, orci lorem pellentesque lectus, quis aliquam felis ligula eget eros. Maecenas nisi tellus, vulputate eu euismod eu, tristique non diam. Aliquam diam mauris, vulputate quis consequat non, convallis ut lectus. In tempus nunc in consequat luctus. Mauris scelerisque est quis ex accumsan mattis. Mauris suscipit dolor et nulla scelerisque, eu feugiat elit fringilla. Aenean sed euismod purus. In velit magna, sollicitudin quis finibus vel, elementum eget purus. Vivamus non enim ligula. Nam ante elit, pretium non iaculis ac, pretium at elit. Vestibulum vulputate condimentum arcu, vel. `

  return (
    <section id="about" className='about'>
      <HeaderContent
        headerText = "About Me"
        icon={<BsInfoCircleFill size={40}/>}

      />

<div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {myDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiJavascript1 size={60} color="var(--blue-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
};

export default About