import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
	return (
		<div>
			<div className="nav">
				<div className="nav__logo">
					<a href="/" rel="home">
						<h1 className="nav__logo__title">tomkoom</h1>
					</a>
				</div>

				<ul className="NavLinks">
					<li>
						<a
							className="NavLink"
							href="https://www.linkedin.com/in/tomash-sugint/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} size="lg" />
						</a>
					</li>

					<li>
						<a
							className="NavLink"
							href="https://twitter.com/_tomkoom"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} size="lg" />
						</a>
					</li>

					<li>
						<a
							className="NavLink"
							href="https://github.com/tomkoom"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} size="lg" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
