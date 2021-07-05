import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
    return (
        <div>

            <div className='Nav'>

                <div>
                    <a className='Logo' href='/' rel="home">
                        <h3>tomkoom</h3>
                    </a>
                </div>

                <ul className='NavLinks'>
                    <li>
                        <a
                            className="NavLink"
                            href='https://twitter.com/_tomkoom'
                            target='_blank'
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size='lg' color="#718096" />
                        </a>
                    </li>

                    <li>
                        <a
                            className="NavLink"
                            href='https://github.com/tomkoom'
                            target='_blank'
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='lg' color="#718096" />
                        </a>

                    </li>
                </ul>


            </div>
        </div >
    )
}

export default Nav
