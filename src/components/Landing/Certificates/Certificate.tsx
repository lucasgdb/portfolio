import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

type CertificateProps = {
	title: string;
	subTitle: string;
	url: string;
};

const Certificate: React.FC<CertificateProps> = ({
	children,
	title,
	subTitle,
	url,
}) => (
	<Reveal
		style={{ margin: 10, width: '100%', maxWidth: '22rem' }}
		animation={Animation.FadeInUp}
	>
		<div className="card h-100" style={{ width: '100%', maxWidth: '22rem' }}>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
				<p className="card-text">{children}</p>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="card-link"
				>
					Ver certificado
				</a>
			</div>
		</div>
	</Reveal>
);

export default Certificate;
