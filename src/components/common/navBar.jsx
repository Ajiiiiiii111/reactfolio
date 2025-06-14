import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = ({ active }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const links = [
		{ path: "/", name: "home" },
		{ path: "/about", name: "about" },
		{ path: "/skills", name: "skills" },
		{ path: "/projects", name: "projects" },
		{ path: "/challenges", name: "challenges" },
		{ path: "/plans", name: "plans" },
		{ path: "/resume", name: "resume" },
		{ path: "/contact", name: "contact" },
	];

	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						{links.map(({ path, name }) => (
							<li
								key={name}
								className={`nav-item ${active === name ? "active" : ""}`}
							>
								<Link to={path}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Hamburger visible only on mobile */}
				<button className="hamburger" onClick={toggleMenu}>
					☰
				</button>

				{/* Mobile dropdown menu */}
				<ul className={`mobile-nav-list ${menuOpen ? "show" : ""}`}>
					{links.map(({ path, name }) => (
						<li
							key={name}
							className={`nav-item ${active === name ? "active" : ""}`}
							onClick={() => setMenuOpen(false)}
						>
							<Link to={path}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
