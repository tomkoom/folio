import React from "react";
import css from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const externalLinkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;

const projects = [
	{
		name: "icApps",
		link: "icapps.xyz",
		category: "Personal project",
		tags: "React.js",
	},
	{
		name: "IndieLogo",
		link: "indielogo.co",
		category: "Personal project",
		tags: "React.js, Redux",
	},
	{
		name: "React Social Network",
		link: "reactsocnet.netlify.app",
		category: "Education",
		tags: "React.js, Redux",
	},
	{
		name: "Codewars",
		link: "www.codewars.com/users/tomkoom",
		category: "Education",
		tags: "js",
	},
	{
		name: "CV",
		link: "career.habr.com/tomkoom",
		category: "CV",
		tags: "",
	},
];

const Projects = () => {
	return (
		<div className={css.projects}>
			<h3>Projects</h3>
			<div className={css.projects__grid}>
				{/* LIST */}
				{projects.map((card, i) => (
					<div className={css.projects__grid__item} key={i}>
						<a
							href={`http://${card.link}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h3 className={css.projects__grid__item__title}>
								{card.name}
							</h3>
							<h4>
								<span className={css.spanColor}>
									{card.link}
								</span>
							</h4>
							<p>{card.category}</p>
							<p>{card.tags}</p>
						</a>
						<div className={css.projects__grid__item__links}>
							<a
								href="#"
								className={
									css.projects__grid__item__links__item
								}
							>
								Live {externalLinkIcon}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
