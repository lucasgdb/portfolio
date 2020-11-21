import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import Technologie from './Technologie';

const Technologies: React.FC = () => (
	<div id="technologies">
		<Reveal animation={Animation.FadeInUp}>
			<h1
				className="text-center text-dark underline"
				style={{ marginTop: 100, marginBottom: 100 }}
			>
				Tecnologias
			</h1>
		</Reveal>

		<div className="d-flex justify-content-center flex-wrap">
			<Technologie
				title="Tecnologias"
				subTitle="Mais populares"
				technologies={[
					{ name: 'GitHub', value: 100 },
					{ name: 'Git', value: 92 },
					{ name: 'Docker', value: 83 },
					{ name: 'TypeScript', value: 74 },
					{ name: 'React.js', value: 85 },
					{ name: 'Node.js', value: 80 },
					{ name: 'Bootstrap', value: 90 },
					{ name: 'Material UI', value: 95 },
					{ name: 'Linux', value: 85 },
				]}
				reveal={Animation.FadeInLeft}
			/>

			<Technologie
				title="Linguagens"
				subTitle="Mais populares"
				technologies={[
					{ name: 'JavaScript', value: 100 },
					{ name: 'HTML5', value: 95 },
					{ name: 'CSS3', value: 75 },
					{ name: 'C#', value: 50 },
					{ name: 'Java', value: 50 },
				]}
				reveal={Animation.FadeInRight}
			/>
		</div>
	</div>
);

export default Technologies;
