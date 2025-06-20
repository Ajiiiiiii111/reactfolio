import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Challenges from "./pages/challenges";
import Plans from "./pages/plans";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} /> 
				<Route path="/projects" element={<Projects />} />
				 <Route path="/challenges" element={<Challenges />} />
				<Route path="/plans" element={<Plans />} />
				<Route path="/resume" element={<Resume />} /> 
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
