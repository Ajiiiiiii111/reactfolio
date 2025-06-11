import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";


const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [selectedImage, setSelectedImage] = useState(null);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								{/* Additional "me" section */}
								<div className="title about-title" style={{ marginTop: "40px" }}>
									{INFO.me.title}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.me.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="aji.jpg"
											alt="Alexander James Ian J. Fernandez"
											className="about-image"
										/>
									</div>
								</div>

								

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					<div className="header-hobbies">
	<h2>Hobbies</h2>
	<div className="hobby-items">
		<img src="game.jpg" alt="Gaming" onClick={() => setSelectedImage("game.jpg")} />
		<img src="listen.jpg" alt="Listening Music" onClick={() => setSelectedImage("listen.jpg")} />
		<img src="movie.jpg" alt="Watching Movies" onClick={() => setSelectedImage("movie.jpg")} />
		<img src="write.jpg" alt="Writing" onClick={() => setSelectedImage("write.jpg")} />
	</div>
</div>

<div className="title-works">
	<h2>My Works</h2>
</div>

<div className="works">
	<img src="iba.png" alt="Work 1" onClick={() => setSelectedImage("iba.png")} />
	<img src="pagkakataon.png" alt="Work 2" onClick={() => setSelectedImage("pagkakataon.png")} />
	<img src="panaginip.png" alt="Work 3" onClick={() => setSelectedImage("panaginip.png")} />
	<img src="panahon.png" alt="Work 4" onClick={() => setSelectedImage("panahon.png")} />
	<img src="teledaan.png" alt="Work 5" onClick={() => setSelectedImage("teledaan.png")} />
	<img src="unan.png" alt="Work 6" onClick={() => setSelectedImage("unan.png")} />
</div>

					{selectedImage && (
	<div className="modal-overlay" onClick={() => setSelectedImage(null)}>
		<div className="modal-content" onClick={(e) => e.stopPropagation()}>
			<img src={selectedImage} alt="Full View" />
			<button className="close-button" onClick={() => setSelectedImage(null)}>✕</button>
		</div>
	</div>
)}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
