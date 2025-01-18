import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { techLogo, title, description, linkText, link, demoText, demoLink } =
		props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						{techLogo.map((logo, index) => {
							return <img key={index} src={logo} alt="logo" />;
						})}
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<Link
						to={link}
						target="_blank"
						rel="noreferrer"
						className="project-link"
					>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</Link>
					{demoLink && demoText && (
						<Link
							to={demoLink}
							target="_blank"
							rel="noreferrer"
							className="project-link"
						>
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{demoText}</div>
						</Link>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
