import React from 'react';
import '../../index.css';
import './navBar.scss';

import { Link } from 'react-router-dom';
import { FaReact, FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { useState } from 'react';

const data = [
  {
    label: "HOME",
    to: "/"
  },
  {
    label: "ABOUT ME",
    to: "/about"
  },
  {
    label: "SKILLS",
    to: "/skills"
  },
  {
    label: "RESUME",
    to: "/resume"
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio"
  },
  {
    label: "CONTACT",
    to: "/contact"
  },
];

const NavBar = () => {

  const [toggleIco, setToggleIco ] = useState(false);

  const handleToggleIco = () => {
    setToggleIco(!toggleIco);
  };

  return (
    <div>
        <nav className="navbar">
          <div className='navbar__container'>
            <Link 
              to={'/'}
              className='navbar__container__logo'
              >
                <FaReact size={25} fill='#1a73e8'/>
              </Link>
            
          </div>

          <ul className={`navbar__container__menu ${toggleIco ? "active" : "" }`} >
            {
              data.map((item, index) => (
              <li 
                key={index} 
                className='navbar__container__menu__item'>
                <Link 
                  to={item.to} 
                  className='navbar__container__menu__item__links'>
                  {item.label}
                </Link>
              </li>))
            }
          </ul>
          <div 
            className='nav-icon' 
            onClick={handleToggleIco}>
              {
                toggleIco ? 
                <HiX size={25} fill='#1a73e8'/> 
                : <FaBars size={25} fill='#1a73e8'/> 
                }
            </div>
        </nav>
    </div>
  );
};

export default NavBar;