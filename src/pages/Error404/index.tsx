import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Link } from 'react-router-dom';
import Header from '~/components/Header';

export default function ErrorPage() {
	return (
		<>
			<Header />

			<div
				className="bg-dark d-flex justify-content-center align-items-center"
				style={{ height: '100vh' }}
			>
				<Reveal animation={Animation.FadeInUp}>
					<h1 className="text-white-50">
						<AnimatedTitle animation={Animation.FadeInUp}>
							Esta página não existe.
						</AnimatedTitle>
					</h1>

					<Link className="text-danger text-decoration-none" to="/">
						<AnimatedTitle animation={Animation.FadeInUp}>
							Clique aqui para voltar
						</AnimatedTitle>
					</Link>
				</Reveal>
			</div>
		</>
	);
}
