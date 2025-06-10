import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resume.css"; // Create this CSS file for styling

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={
						currentSEO?.description ||
						"Download and view my professional resume and qualifications."
					}
				/>
				<meta
					name="keywords"
					content={
						currentSEO?.keywords?.join(", ") ||
						"resume, cv, professional background, qualifications"
					}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="projects-container">
						<div className="title projects-title">My Resume</div>

						<div className="subtitle projects-subtitle">
							You can view or download my curriculum vitae below to learn more about my academic background, technical skills, and work experience.
						</div>

						<div className="resume-card">
							<iframe
								src="\CV - FERNANDEZ - ALEXANDER JAMES IAN.pdf"
								title="My Resume"
								width="100%"
								height="600px"
								style={{ border: "none", borderRadius: "12px" }}
							></iframe>

							<div className="resume-buttons">
								<a
									href="\CV - FERNANDEZ - ALEXANDER JAMES IAN.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="resume-button"
								>
									View Fullscreen
								</a>
								<a
									href="\CV - FERNANDEZ - ALEXANDER JAMES IAN.pdf"
									download
									className="resume-button"
								>
									Download CV
								</a>
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

export default Resume;
