import React from 'react'
import './Projects.css'
import Tilt from 'react-parallax-tilt'

const Projects = ({ data }) => {
    const space = {}

    return (
        <div className="ProjectsContainer">
            {/* <div className="divider32"></div> */}
            <div className="ProjectsGrid">

                {data.map((card, index) => (
                    <Tilt scale={0.99} tiltReverse={true} tiltMaxAngleX={3} tiltMaxAngleY={3}>
                        <div className="ProjectItem" key={index}>
                            <a
                                href={`http://${card.link}`}
                                target="_blank"
                                rel="noopener noreferrer">

                                <h2>{card.name}</h2>
                                <div className="divider8"></div>
                                <h3>
                                    <span className="SpanColor">
                                        {card.link}
                                    </span>
                                </h3>
                                <div className="divider8"></div>
                                <p>{card.category}</p>
                                <div className="divider8"></div>
                                <p>{card.tags}</p>

                                {/* <span class="LinkBlock"></span> */}
                            </a>
                        </div>
                    </Tilt>
                ))}

            </div>

        </div >

    )
}

export default Projects