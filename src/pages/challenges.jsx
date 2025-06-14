import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/challenges.css";

const challenges = [
	{
		id: 1,
		title: "Overcoming Self-Doubt",
		description: "One of the most personal challenges has been battling self-doubt learning to trust my abilities and believe in my potential. There were moments when fear of failure held me back, but over time, I’ve learned that growth often begins just outside of your comfort zone.",
	},
	{
		id: 2,
		title: "Balancing Expectations",
		description: "Balancing personal goals with family, societal, or academic expectations has at times been overwhelming. Learning to prioritize what truly matters to me and setting boundaries has been an ongoing but empowering lesson.",
	},
	{
		id: 3,
		title: "Navigating Uncertainty",
		description: "Whether it was making big decisions without clear outcomes or facing unexpected life changes, uncertainty has tested my adaptability. These experiences have taught me the value of patience and staying grounded when things don’t go as planned.",
	},
	{
		id: 4,
		title: "Managing Stress and Burnout",
		description: "In the pursuit of success, I’ve experienced the toll that stress and overworking can take on mental and physical health. Recognizing the importance of rest, mindfulness, and work-life balance has been a major turning point in how I approach challenges today.",
	},
    {
		id: 5,
		title: "Learning from Failure",
		description: "Failure has been one of my greatest teachers. Each setback offered a lesson sometimes painful, but always necessary. It’s through failure that I’ve gained resilience, humility, and perspective.",
	},
];

const Challenge = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "challenges");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Challenges | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={currentSEO?.description || "Explore and join various challenges to grow personally and professionally."}
				/>
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || "challenges, personal growth, habits, productivity"}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="challenges" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="projects-container">
						<div className="title projects-title">My Challenges</div>

						<div className="subtitle projects-subtitle">
							Explore a series of self-improvement challenges designed to build your discipline, skills, and well-being. Whether it's coding, fitness, reading, or mindfulness, you'll find a challenge that fits your goals!
						</div>

						<div className="challenge">
							{challenges.map(({ id, title, description }) => (
								<div key={id} className="challenge-item">
									<h2>{title}</h2>
									<p>{description}</p>
									{/* <button className="join-button">Join Now</button> */}
								</div>
							))}
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

export default Challenge;
