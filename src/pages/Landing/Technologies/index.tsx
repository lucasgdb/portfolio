import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import TechnologieContainer from '~/components/TechnologieContainer';

const Technologies = () => {
	return (
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
				<TechnologieContainer
					title="Tecnologias"
					subTitle="Mais populares"
					technologies={[
						{ name: 'GitHub', value: 100 },
						{ name: 'Docker', value: 80 },
						{ name: 'TypeScript', value: 60 },
						{ name: 'React.js', value: 85 },
						{ name: 'Node.js', value: 80 },
						{ name: 'Bootstrap', value: 90 },
						{ name: 'Material UI', value: 95 },
						{ name: 'Linux', value: 85 },
					]}
				/>

				<TechnologieContainer
					title="Linguagens"
					subTitle="Mais populares"
					technologies={[
						{ name: 'JavaScript', value: 100 },
						{ name: 'HTML5', value: 95 },
						{ name: 'CSS3', value: 75 },
						{ name: 'C#', value: 50 },
						{ name: 'Java', value: 50 },
					]}
				/>
			</div>
		</div>
	);
};

export default Technologies;
