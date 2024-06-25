import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./dci.png"
								alt="Digital Career Institute logo."
								className="work-image"
							/>
							<div className="work-title">
								Digital Career Institute gGmbH, Berlin
							</div>
							<div className="work-subtitle">
								Web Developer Junior Instructor
							</div>
							<div className="work-duration">
								10/2022 - 08/2024
							</div>
						</div>

						<div className="work">
							<img
								src="./dci.png"
								alt="Digital Career Institute logo."
								className="work-image"
							/>
							<div className="work-title">
								Digital Career Institute gGmbH, Berlin
							</div>
							<div className="work-subtitle">
								Junior Test Automation Engineer
							</div>
							<div className="work-duration">
								02/2022 - 10/2022
							</div>
						</div>
						<div className="work">
							<img
								src="./dci.png"
								alt="Digital Career Institute logo."
								className="work-image"
							/>
							<div className="work-title">
								Digital Career Institute gGmbH, Berlin
							</div>
							<div className="work-subtitle">
								Web Developer Assistant Instructor
							</div>
							<div className="work-duration">
								10/2021 - 10/2023
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
