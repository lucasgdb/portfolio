import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const MyHistory = () => (
	<div id="my-history">
		<Reveal animation={Animation.FadeInUp}>
			<h1
				className="text-center"
				style={{ marginTop: 100, marginBottom: 44 }}
			>
				<AnimatedTitle animation={Animation.FadeInUp}>
					Minha história
				</AnimatedTitle>
			</h1>
		</Reveal>

		<Timeline lineColor={'#ddd'}>
			<TimelineItem
				dateText="10/02/2020 - Atualmente"
				dateInnerStyle={{ background: '#dc3545' }}
				style={{ color: '#dc3545' }}
			>
				<h3>LIAX Tecnologia</h3>
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

				<span className="badge bg-success p-2">Estágio</span>
				<span className="badge bg-primary p-2 ml-1">Primeiro emprego</span>
			</TimelineItem>

			<TimelineItem
				dateText="26/01/2019 - Atualmente"
				dateInnerStyle={{ background: '#aaa' }}
			>
				<h3>Fatec Guaratinguetá</h3>
				<h4 className="text-black-50">
					Análise e Desenvolvimento de Sistemas
				</h4>

				<p className="mt-4">
					Entrei na Faculdade de Tecnologia de Guaratinguetá no curso de
					Análise e Desenvolvimento de Sistemas.
				</p>
				<p>
					Aqui foi onde comecei a criar portfólio como Desenvolvedor,
					participando de eventos como Hackathons e Maratonas de
					Programação.
				</p>

				<span className="badge bg-success p-2">Faculdade</span>
				<span className="badge bg-primary p-2 ml-1">Tecnólogo</span>
			</TimelineItem>

			<TimelineItem
				dateText="24/07/2018 - Concluído"
				style={{ color: '#76bb7f' }}
				dateInnerStyle={{ background: '#76bb7f' }}
			>
				<h3>Etec Guaratinguetá</h3>
				<h4 className="text-black-50">Desenvolvimento de Sistemas</h4>

				<p className="mt-4">
					Entrei na Escola Técnica de Guaratinguetá no curso de
					Desenvolvimento de Sistemas.
				</p>
				<p>
					Aqui foi onde tive meu primeiro contato em um curso onde comecei
					a aprender na prática as coisas que eu gostava, que era
					programar. Conheci pessoas incríveis que levo pra vida.
				</p>

				<span className="badge bg-primary p-2">Técnico</span>
			</TimelineItem>
		</Timeline>
	</div>
);

export default MyHistory;
