import React from "react";
import css from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
	return (
		<div>
			<div className={css.nav}>
				<div className={css.nav__logo}>
					<a href="/" rel="home">
						<h1 className={css.nav__logo__title}>tomkoom</h1>
					</a>
				</div>

				<ul className={css.nav__list}>
					<li className={css.nav__list__item}>
						<a
							className={css.nav__list__item__link}
							href="https://github.com/tomkoom"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>

					<li className={css.nav__list__item}>
						<a
							className={css.nav__list__item__link}
							href="https://twitter.com/_tomkoom"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>

					<li className={css.nav__list__item}>
						<a
							className={css.nav__list__item__link}
							href="https://www.linkedin.com/in/tomash-sugint/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
