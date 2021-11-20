import React from "react";
import "./Projects.css";

const Projects = ({ data }) => {
	return (
		<div className="projects">
			<div className="projects__grid">
				{data.map((card, i) => (
					<div className="projects__grid__item" key={i}>
						<a
							href={`http://${card.link}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>{card.name}</h2>
							<h3>
								<span className="span-color">{card.link}</span>
							</h3>
							<p>{card.category}</p>
							<p>{card.tags}</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
