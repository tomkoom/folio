import React from "react";
import css from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const externalLinkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;

const projects = [
	{
		name: "icApps",
		description:
			"icApps is an application directory for the Internet Computer blockchain project.",
		liveLink: "https://icapps.xyz/",
		githubLink: "https://github.com/tomkoom/icApps",
		category: "Personal project",
		tags: ["React", "Google Sheets API", "framer-motion"],
	},
	{
		name: "IndieLogo",
		description: "A simple logo creation app built with React and Stripe.js",
		liveLink: "https://indielogo.co/",
		githubLink: "",
		category: "Personal project",
		tags: ["React", "Stripe.js"],
	},
	{
		name: "React Nav Components",
		description: "A simple logo creation app built with React and Stripe.js",
		liveLink: "https://react-nav-components.netlify.app/",
		githubLink: "https://github.com/tomkoom/react-nav-components",
		category: "Components",
		tags: ["React", "framer-motion"],
	},
	// {
	// 	name: "React Social Network",
	// 	description: "Lorem ipsum",
	// 	liveLink: "https://reactsocnet.netlify.app/",
	// 	githubLink: "",
	// 	category: "Education",
	// 	tags: ["React.js", "Redux"],
	// },
	// {
	// 	name: "Codewars",
	// 	description: "Lorem ipsum",
	// 	liveLink: "https://www.codewars.com/users/tomkoom/",
	// 	githubLink: "",
	// 	category: "Education",
	// 	tags: ["JS"],
	// },
	// {
	// 	name: "CV",
	// 	description: "Lorem ipsum",
	// 	liveLink: "https://career.habr.com/tomkoom",
	// 	githubLink: "",
	// 	category: "CV",
	// 	tags: [],
	// },
];

const Projects = () => {
	return (
		<div className={css.projects}>
			<h3>Projects</h3>
			<div className={css.projects__grid}>
				{/* LIST */}
				{projects.map((p, i) => (
					<div className={css.projects__grid__item} key={i}>
						<div className={css.projects__grid__item__caption}>
							<h3 className={css.projects__grid__item__caption__title}>{p.name}</h3>
							<div
								className={css.projects__grid__item__caption__category}
								style={
									p.category === "Personal project"
										? { backgroundColor: "#651fff" }
										: p.category === "Education"
										? { backgroundColor: "#00796b" }
										: p.category === "Components"
										? { backgroundColor: "#2979ff" }
										: null
								}
							>
								{p.category}
							</div>
						</div>

						<p className={css.projects__grid__item__description}>{p.description}</p>

						<div className={css.projects__grid__item__tags}>
							{p.tags.map((tag, i) => (
								<span className={css.projects__grid__item__tags__item} key={i}>
									{tag}
								</span>
							))}
						</div>

						<div className={css.projects__grid__item__links}>
							<a
								href={p.liveLink ? p.liveLink : null}
								className={css.projects__grid__item__links__item}
								style={p.liveLink ? null : { display: "none" }}
								target="_blank"
								rel="norefferer noopener"
							>
								Live {externalLinkIcon}
							</a>
							<a
								href={p.githubLink ? p.githubLink : null}
								className={css.projects__grid__item__links__item}
								style={p.githubLink ? null : { display: "none" }}
								target="_blank"
								rel="norefferer noopener"
							>
								GitHub {externalLinkIcon}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
