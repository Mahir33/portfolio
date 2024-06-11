import React from 'react';
// import { useState } from 'react';
import { useForm } from '@formspree/react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from "react-simple-animate";

import './contact.scss';

function Contact() {

  const [state, handleSubmit, reset] = useForm('mknddjdj');

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     description: '',
// });

// const [errors, setErrors] = useState({});

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//         ...formData,
//         [name]: value,
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm(formData);
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//         // Form submission logic here
//         console.log('Form submitted successfully!');
//     } else {
//         console.log(`Form submission failed
//          due to validation errors.`);
//     }

//     console.log(formData)
// };

// const validateForm = (data) => {
//     const errors = {};

//     if (!data.name.trim()) {
//         errors.name = 'Name is required';
//     }

//     if (!data.email.trim()) {
//         errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//         errors.email = 'Email is invalid';
//     }

//     if (!data.message) {
//         errors.message = 'Message is required';
//     } else if (data.message.length < 8) {
//         errors.message = `Message must be at 
//         least 8 characters long`;
//     }


//     return errors;
// };

  return (
    <section id="contact" className='contact'>
      <HeaderContent
        headerText = "Contact"
        icon={<BsInfoCircleFill size={40}/>}

      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit} className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  // value={formData.name}
                  // onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  // value={formData.email}
                  // onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  // value={formData.description}
                  // onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit" disabled={state.submitting}>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  )
}

export default Contact;