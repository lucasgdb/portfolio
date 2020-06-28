import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Link } from 'react-router-dom';

const Header = () => (
	<nav className="navbar fixed-top navbar-dark bg-dark ">
		<div className="container-fluid">
			<Reveal animation={Animation.FadeInLeft}>
				<Link className="navbar-brand text-white-50" to="/">
					Lucas Bittencourt
				</Link>
			</Reveal>

			<Reveal animation={Animation.FadeInRight}>
				<a
					className="btn bg-danger text-white"
					href="https://github.com/lucasgdb"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
			</Reveal>
		</div>
	</nav>
);

export default Header;
