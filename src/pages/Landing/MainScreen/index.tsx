import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { ArrowDown } from '~/components/Image';

const MainScreen = () => (
	<div
		className="bg-dark d-flex justify-content-center align-items-center position-relative"
		style={{ height: '100vh' }}
	>
		<Reveal animation={Animation.FadeInUp}>
			<h1 className="text-white-50">
				<AnimatedTitle animation={Animation.FadeInUp}>
					Lucas Bittencourt
				</AnimatedTitle>
			</h1>

			<label className="text-danger">
				<AnimatedTitle animation={Animation.FadeInUp}>
					Desenvolvedor full-stack
				</AnimatedTitle>
			</label>
		</Reveal>

		<a href="#certificates">
			<ArrowDown />
		</a>
	</div>
);

export default MainScreen;
