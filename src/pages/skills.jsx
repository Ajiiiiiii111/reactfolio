import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/skill.css";

const Skill = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "skills");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Skills | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO?.description || "My skillset and certifications."} />
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || "skills, frontend, development, programming"}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="projects-container">
						<div className="title projects-title">
							Skills and Technologies I’ve Learned
						</div>

						<div className="subtitle projects-subtitle">
							Throughout my time as a computer science student at Cavite State University Bacoor Campus, I have acquired a variety of technical skills that have helped me build real-world projects. These skills continue to grow as I explore new tools and technologies.
						</div>

					{/* <h1 className="skill-section-title">Frontend Development</h1> */}


						<div className="skill">
							<div className="skill-item">
								<h2>HTML</h2>
								<img src="html4.png" alt="HTML" />
							</div>

							<div className="skill-item">
								<h2>CSS</h2>
								<img src="CSS2.jpg" alt="CSS" />
							</div>

							<div className="skill-item">
								<h2>Java</h2>
								<img src="java.jpg" alt="Java" />
							</div>

							<div className="skill-item">
								<h2>JavaScript</h2>
								<img src="JS2.jpg" alt="JavaScript" />
							</div>

							<div className="skill-item">
								<h2>Python</h2>
								<img src="py.jpg" alt="Python" />
							</div>

							<div className="skill-item">
								<h2>React</h2>
								<img src="react1.jpg" alt="React" />
							</div>

							<div className="skill-item">
								<h2>Node.js</h2>
								<img src="node.jpg" alt="Node.js" />
							</div>
						</div>

						<div className="certificate">
							<div className="certi">
								<h2>Certificates</h2>
								<p>Dean's Lister</p>
								<img src="cert.png" alt="Dean's Lister" />
								
							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
