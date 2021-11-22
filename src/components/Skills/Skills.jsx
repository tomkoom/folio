import React from "react";
import css from "./Skills.module.css";

const skills = ["React", "JS", "HTML", "CSS", "GIT", "APIs", "Framer Motion"];

const Skills = () => {
	return (
		<section className={css.skills}>
			<h3>Skills</h3>
			<div className={css.skills__container}>
				{skills.map((skill, i) => (
					<span className={css.skills__container__tag} key={i}>
						{skill}
					</span>
				))}
			</div>
		</section>
	);
};

export default Skills;
