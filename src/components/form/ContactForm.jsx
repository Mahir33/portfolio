import React from "react";
import { useForm } from "@formspree/react";
import "./styles/contactForm.css";

const ContactForm = () => {
	const [state, handleSubmit, reset] = useForm("mknddjdj");

	if (state.submitting) {
		return <p className="submitting">Submitting…</p>;
	}

	if (state.succeeded) {
		return (
			<div className="confirmed">
				<p className="confirmed__message">Take me back!</p>
				<button className="confirmed__button" onClick={reset}>
					Reset
				</button>
			</div>
		);
	}

	return (
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
						Your message
					</label>
				</div>
			</div>
			<button type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
