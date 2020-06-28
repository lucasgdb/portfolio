import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Header from '~/components/Header';

export default function Landing() {
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
							Lucas Bittencourt
						</AnimatedTitle>
					</h1>
					<label className="text-danger">
						<AnimatedTitle animation={Animation.FadeInUp}>
							Desenvolvedor full-stack
						</AnimatedTitle>
					</label>
				</Reveal>
			</div>

			<h1
				className="text-center"
				style={{ marginTop: 100, marginBottom: 100 }}
			>
				Certificados
			</h1>

			<div className="d-flex justify-content-center flex-wrap">
				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal animation={Animation.FadeInUp}>
					<div className="card m-2" style={{ maxWidth: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">HTTP</h5>
							<h6 className="card-subtitle mb-2 text-muted">Alura</h6>
							<p className="card-text">
								HTTP - Entendendo a Web por baixo dos panos.
							</p>
							<a href="#" className="card-link">
								Ver certificado
							</a>
						</div>
					</div>
				</Reveal>
			</div>

			<div className="container">
				<hr className="mt-5" />
			</div>

			<Timeline lineColor={'#ddd'}>
				<TimelineItem
					dateText="10/02/2020 - Atualmente"
					dateInnerStyle={{ background: '#76bb7f' }}
					style={{ color: '#dc3545' }}
				>
					<h3>LIAX Tecnologia da Informação</h3>
					<h4 className="text-black-50">Estagiário Desenvolvedor</h4>

					<p className="mt-4">
						Iniciei meu primeiro emprego na área de Desenvolvimento como
						estagiário na LIAX Tecnologia
					</p>
					<p>
						Lá trabalhamos com várias tecnologias, como C#, Java, PHP,
						JavaScript, React, Docker, Git, entre outras.
					</p>
					<p>
						Atuei nos seguintes projetos:{' '}
						<a
							href="https://toaqui.liax.com.br"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tô Aqui
						</a>
						, KingX Automation e LIAX Opportunity Management.
					</p>

					<span className="badge bg-danger p-2">Estágio</span>
					<span className="badge bg-primary p-2 ml-1">
						Primeiro emprego
					</span>
				</TimelineItem>

				<TimelineItem
					dateText="10/02/2020 - Atualmente"
					dateInnerStyle={{ background: '#76bb7f' }}
				>
					<h3>LIAX Tecnologia</h3>
					<h4 className="text-black-50">Estagiário</h4>

					<p className="mt-4">
						Iniciei meu primeiro emprego na área de Desenvolvimento como
						estagiário na LIAX Tecnologia
					</p>
					<p>
						Lá trabalhamos com várias tecnologias, como C#, Java, PHP,
						JavaScript, React, Docker, Git, entre outras.
					</p>
					<p>
						Atualmente atuo no projeto{' '}
						<a
							href="https://toaqui.liax.com.br"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tô Aqui
						</a>{' '}
						e Automação KingX.
					</p>
				</TimelineItem>

				<TimelineItem
					dateText="10/02/2020 - Atualmente"
					dateInnerStyle={{ background: '#76bb7f' }}
				>
					<h3>LIAX Tecnologia</h3>
					<h4 className="text-black-50">Estagiário</h4>

					<p className="mt-4">
						Iniciei meu primeiro emprego na área de Desenvolvimento como
						estagiário na LIAX Tecnologia
					</p>
					<p>
						Lá trabalhamos com várias tecnologias, como C#, Java, PHP,
						JavaScript, React, Docker, Git, entre outras.
					</p>
					<p>
						Atualmente atuo no projeto{' '}
						<a
							href="https://toaqui.liax.com.br"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tô Aqui
						</a>{' '}
						e Automação KingX.
					</p>
				</TimelineItem>

				<TimelineItem
					dateText="10/02/2020 - Atualmente"
					dateInnerStyle={{ background: '#76bb7f' }}
				>
					<h3>LIAX Tecnologia</h3>
					<h4 className="text-black-50">Estagiário</h4>

					<p className="mt-4">
						Iniciei meu primeiro emprego na área de Desenvolvimento como
						estagiário na LIAX Tecnologia
					</p>
					<p>
						Lá trabalhamos com várias tecnologias, como C#, Java, PHP,
						JavaScript, React, Docker, Git, entre outras.
					</p>
					<p>
						Atualmente atuo no projeto{' '}
						<a
							href="https://toaqui.liax.com.br"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tô Aqui
						</a>{' '}
						e Automação KingX.
					</p>
				</TimelineItem>
			</Timeline>
		</>
	);
}
