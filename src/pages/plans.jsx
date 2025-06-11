import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/plans.css";

const futurePlans = [
	{
		title: "Building a Professional Career",
		description:
			"My immediate goal is to apply the skills and knowledge I’ve gained to a dynamic and growth-oriented work environment. I’m particularly interested in web development, where I can contribute meaningfully while continuing to learn and grow professionally.",
	},
	{
		title: "Continuing Education and Skill Development",
		description:
			"Learning doesn’t stop at graduation. I plan to pursue certifications, attend workshops, and explore postgraduate opportunities to deepen my expertise. Staying current and adaptable is key in today’s fast-changing world.",
	},
	{
		title: "Giving Back and Mentoring",
		description:
			"I also hope to give back to my community whether through mentorship, volunteering, or supporting causes that matter to me. I believe success means little unless it uplifts others along the way.",
	},
	{
		title: "Personal Growth and Balance",
		description:
			"Beyond work, I aim to maintain a balanced life that prioritizes health, creativity, and meaningful relationships. Whether through travel, hobbies, or side projects, I want to keep growing as a whole person not just a professional.",
	},
	
];

const FuturePlans = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "plans");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Plans | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={
						currentSEO?.description ||
						"Explore upcoming goals, ambitions, and future plans after graduation."
					}
				/>
				<meta
					name="keywords"
					content={
						currentSEO?.keywords?.join(", ") ||
						"future plans, career goals, personal growth, professional development"
					}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="plans" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="projects-container">
						<div className="title projects-title">My Future Plans</div>
						<div className="subtitle projects-subtitle">
							As I step into life after graduation, these are the goals that guide my journey — both professionally and personally.
						</div>

						<div className="plans-list">
							{futurePlans.map((plan, idx) => (
								<div key={idx} className="plan-card">
									<h3>{plan.title}</h3>
									<p>{plan.description}</p>
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

export default FuturePlans;
