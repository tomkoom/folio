import React from "react";
import css from "./About.module.css";

const About = () => {
	return (
		<section className={css.about}>
			<h2>Hi! I'm Tomash</h2>
			<p className={css.intro}>I'm a Frontend Developer from Belarus.</p>
		</section>
	);
};

export default About;
