import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

const Header = () => (
	<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
		<div className="container-fluid">
			<Reveal animation={Animation.FadeInLeft}>
				<Link
					className="navbar-brand text-light ml-2 d-flex align-items-center"
					to="/"
				>
					<img
						src={`${process.env.PUBLIC_URL}/static/icon.png`}
						alt="Lucas Bittencourt"
						width={35}
						className="mr-2"
					/>
					Bittencourt
				</Link>
			</Reveal>

			<div className="order-lg-2">
				<Reveal animation={Animation.FadeInRight}>
					<a
						className="btn bg-danger text-white"
						href="./static/Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Currículo
					</a>

					<button
						className="navbar-toggler ml-2"
						type="button"
						data-toggle="collapse"
						data-target="#navbarToggler"
						aria-controls="navbarToggler"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</Reveal>
			</div>

			<div
				className="collapse navbar-collapse order-lg-1"
				id="navbarToggler"
			>
				<Scrollspy
					items={[
						'certificates',
						'my-timeline',
						'technologies',
						'contact',
					]}
					className="navbar-nav mr-auto mb-2 mb-lg-0"
					currentClassName="bg-danger"
				>
					<li className="nav-item">
						<a className="nav-item" href="#certificates">
							<button className="btn text-white w-100">
								Certificados
							</button>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-item" href="#my-timeline">
							<button className="btn text-white w-100">
								Linha do tempo
							</button>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-item" href="#technologies">
							<button className="btn text-white w-100">
								Tecnologias
							</button>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-item" href="#contact">
							<button className="btn text-white w-100">Contato</button>
						</a>
					</li>
				</Scrollspy>
			</div>
		</div>
	</nav>
);

export default Header;
