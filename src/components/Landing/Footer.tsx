import React, { useEffect, useState } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import facebookIcon from '~/static/facebook.png';
import githubIcon from '~/static/github.png';
import linkedInIcon from '~/static/linkedin.png';
import stackOverFlowIcon from '~/static/stackoverflow.png';
import telegramIcon from '~/static/telegram.png';
import whatsAppIcon from '~/static/whatsapp.png';

const Footer: React.FC = () => {
	const [show, setShow] = useState(false);
	const [st, setSt] = useState(
		window.pageYOffset || document.documentElement.scrollTop
	);

	useEffect(() => {
		setShow(st >= 30.27);
	}, [st]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const newSt = window.pageYOffset || document.documentElement.scrollTop;

			setSt(newSt);
		});
	}, []);

	return show ? (
		<nav className="navbar fixed-bottom navbar-light bg-dark d-flex justify-content-center p-1">
			<Reveal animation={Animation.FadeInRight}>
				<a
					href="https://linkedin.com/in/lucas-bittencourt"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="icon-hover-up"
						src={linkedInIcon}
						alt="LinkedIn"
						width={25}
					/>
				</a>

				<a
					href="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="ml-2 icon-hover-up"
						src={stackOverFlowIcon}
						alt="StackOverFlow"
						width={25}
					/>
				</a>

				<a
					href="https://github.com/lucasgdb"
					target="_blank"
					rel="noopener noreferrer"
					className="icon-hover-up"
				>
					<img
						className="ml-2 icon-hover-up"
						src={githubIcon}
						alt="GitHub"
						width={25}
					/>
				</a>

				<a
					href="https://www.facebook.com/lucasgdbittencourt"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="ml-2 icon-hover-up"
						src={facebookIcon}
						alt="Facebook"
						width={25}
					/>
				</a>

				<a
					href="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="ml-2 icon-hover-up"
						src={whatsAppIcon}
						alt="WhatsApp"
						width={25}
					/>
				</a>

				<a
					href="tg://resolve?domain=lucasgdb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="ml-2 icon-hover-up"
						src={telegramIcon}
						alt="Telegram"
						width={25}
					/>
				</a>
			</Reveal>
		</nav>
	) : null;
};

export default Footer;
