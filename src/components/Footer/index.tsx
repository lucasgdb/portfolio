import React from 'react';
import facebookIcon from '~/static/facebook.png';
import linkedInIcon from '~/static/linkedin.png';
import stackOverFlowIcon from '~/static/stackoverflow.png';
import whatsAppIcon from '~/static/whatsapp.png';
import { GitHub } from '../Image';

const Footer = () => (
	<div className="pt-2 pb-2 bg-dark d-flex justify-content-center">
		<a
			href="https://linkedin.com/in/lucas-bittencourt"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="icon-hover-up"
				src={linkedInIcon}
				alt="LinkedIn"
				width={30}
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
				width={30}
			/>
		</a>

		<a
			href="https://github.com/lucasgdb"
			target="_blank"
			rel="noopener noreferrer"
			className="icon-hover-up"
		>
			<GitHub />
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
				width={30}
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
				width={30}
			/>
		</a>
	</div>
);

export default Footer;
