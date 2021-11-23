import React from "react";
import css from "./About.module.css";

const About = () => {
	return (
		<section className={css.about}>
			<h2>Hi! 👋 I'm Tomash</h2>
			<p className={css.intro}>
				I'm a <span>Frontend Developer</span> living in Minsk.
			</p>
		</section>
	);
};

export default About;
