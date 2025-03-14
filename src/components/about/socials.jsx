import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>
			<div className="social">
				<a href={INFO.socials.x} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faXTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Twitter</div>
				</a>
			</div>
			<div className="social">
				<a href={INFO.socials.medium} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faFire}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Medium</div>
				</a>
			</div>

			<div className="social">
				<a href="src/data/documents/resume.pdf" download>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faFileDownload}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Check my Resume</div>
				</a>
			</div>

			<div className="email-wrapper">
				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon icon={faEnvelope} />
					</div>

					<div className="social-text">{INFO.main.email}</div>
				</a>
			</div>
		</div>
	);
};

export default Socials;
