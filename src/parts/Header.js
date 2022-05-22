import React from 'react'
import Fade from 'react-reveal/Fade';
import Logo from "assets/images/logo.svg";
import { Link } from 'react-router-dom'
import Btn from "elements/Button";

export default function Header() {
	return (
	  <Fade bottom delay={300}>
		<header className="site-header">
			<div className="container">
				<div className="site-header-inner">
					<div className="brand">
						<h1 className="m-0">
							<Link to="/"><img
								src={Logo}
								alt="Cube"
								width="32"
								height="32"
							/></Link>
						</h1>
					</div>
					<button
						id="header-nav-toggle"
						className="header-nav-toggle"
					>
						<span className="screen-reader">Menu</span>
						<span className="hamburger"
						><span className="hamburger-inner"></span
						></span>
					</button>
					<nav id="header-nav" className="header-nav">
						<div className="header-nav-inner">
							<ul
								className="list-reset text-xxs header-nav-right"
							>
								<li><Link to="#">Home</Link></li>
								<li><Link to="#">Features</Link></li>
								<li><Link to="#">Pricing</Link></li>
								<li><Link to="#">Showcase</Link></li>
							</ul>
							<ul className="list-reset header-nav-right">
								<li>
									<Btn isPrimary isWideMobile isSmall>Sign Up</Btn>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	  </Fade>
  )
}
