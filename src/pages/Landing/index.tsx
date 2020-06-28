import React, { useState } from 'react';
import BackToTop from 'react-back-to-top-button';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Certificate from '~/components/Certificate';
import Header from '~/components/Header';

export default function Landing() {
	const [showMore, setShowMore] = useState(false);

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

			<Reveal animation={Animation.FadeInUp}>
				<h1
					id="certificates"
					className="text-center"
					style={{ marginTop: 100, marginBottom: 94 }}
				>
					<AnimatedTitle animation={Animation.FadeInUp}>
						Certificados
					</AnimatedTitle>
				</h1>
			</Reveal>

			<div className="d-flex justify-content-center align-items-stretch flex-wrap">
				<Certificate
					title="HTTP"
					subTitle="Alura 09/2019"
					url="https://cursos.alura.com.br/certificate/1cf36134-cecd-4386-8f48-b3c7eb725bd6"
				>
					HTTP - Entendendo a Web por baixo dos panos.
				</Certificate>

				<Certificate
					title="Docker - Fundamentos"
					subTitle="TreinaWeb 08/2019"
					url="https://drive.google.com/file/d/1eXYWOLmlC1SaO8HScpmMCAI4PaNhUeEC/view?usp=sharing"
				>
					Curso dos fundamentos do Docker feito na TreinaWeb.
				</Certificate>

				<Certificate
					title="JavaScript ES6"
					subTitle="TreinaWeb 01/2019"
					url="https://drive.google.com/file/d/1nbWhwygwMXWRorjpKqb7H7ov28SxCxoA/view?usp=sharing"
				>
					Novidades do EcmaScript 2015 (ES6) do JavaScript.
				</Certificate>

				<Certificate
					title="JavaScript Avançado"
					subTitle="TreinaWeb 10/2018"
					url="https://drive.google.com/file/d/1MdGWb8yFg2saHjUn4Y0pBwTcdGmGiABF/view?usp=sharing"
				>
					Entendendo mais a fundo o JavaScript ES5.
				</Certificate>

				<Certificate
					title="JavaScript Intermediário"
					subTitle="TreinaWeb 09/2018"
					url="https://drive.google.com/file/d/1NZkuNnOxn8YUagqlel1TfuspOEmgib0O/view?usp=sharing"
				>
					Entendendo melhor o JavaScript ES5.
				</Certificate>

				<Certificate
					title="JavaScript Básico"
					subTitle="TreinaWeb 08/2018"
					url="https://drive.google.com/file/d/11nR3Nu1REhJ5_oLVfGo12YBQ_KuopCdr/view?usp=sharing"
				>
					Começando a entender o JavaScript ES5.
				</Certificate>

				<Certificate
					title="HTML5 e CSS3"
					subTitle="TreinaWeb 08/2018"
					url="https://drive.google.com/file/d/1_7aj48Ho_7ZEcgyCicNGc5fvy9RSpScc/view?usp=sharing"
				>
					Curso de HTML5 e CSS3 Básico.
				</Certificate>

				<Certificate
					title="HTML5 e CSS3"
					subTitle="TreinaWeb 08/2018"
					url="https://drive.google.com/file/d/1_SWQS_Yqyv-vWQaH6brIFqNbeO_61HpN/view?usp=sharing"
				>
					Curso de HTML5 e CSS3 Avançado.
				</Certificate>

				{showMore && (
					<>
						<Certificate
							title="Começando com Angular"
							subTitle="balta.io 06/2020"
							url="https://certificates.balta.io/NWVlODMyZTU2NjY2NTgxYmRjYjYwNzkzLDVjNmIyY2MyZTcxNzlhMjdlYjYyYmFlMA=="
						>
							Começando com o básico do Angular.
						</Certificate>

						<Certificate
							title="Gestão de Dados"
							subTitle="FATEC 09/2019"
							url="https://certificates.balta.io/NWVlODMyZTU2NjY2NTgxYmRjYjYwNzkzLDVjNmIyY2MyZTcxNzlhMjdlYjYyYmFlMA=="
						>
							Mini Curso de Gestão de Dados feito na Fatec Guaratinguetá
							- SETI 2019
						</Certificate>

						<Certificate
							title="HTML5 e CSS3"
							subTitle="Curso em Vídeo 01/2019"
							url="https://drive.google.com/file/d/1SZjCqoNMD5ZHcKOu6QGJsOoZkwM_bJby/view?usp=sharing"
						>
							Curso básico de HTML5 e CSS3 do Curso em Vídeo (Gustavo
							Guanabara)
						</Certificate>

						<Certificate
							title="PHP Básico"
							subTitle="Curso em Vídeo 03/2019"
							url="https://drive.google.com/file/d/1Fbo22zHbdynKY1FlUiuIEs7rXddm_8Qu/view?usp=sharing"
						>
							Curso básico de PHP do Curso em Vídeo (Gustavo Guanabara)
						</Certificate>

						<Certificate
							title="Bootstrap 4 - Básico"
							subTitle="Curso em Vídeo 01/2019"
							url="https://drive.google.com/file/d/1inYX3NMaOSq_CJj6c54-I8ZJ5ypAqz6C/view?usp=sharing"
						>
							Curso básico de Bootstrap 4 do Curso em Vídeo (Gustavo
							Guanabara)
						</Certificate>

						<Certificate
							title="Algoritmos - Parte 1"
							subTitle="TreinaWeb 10/2018"
							url="https://drive.google.com/file/d/1inYX3NMaOSq_CJj6c54-I8ZJ5ypAqz6C/view?usp=sharing"
						>
							Parte 1 do Curso de Algoritmos da TreinaWeb.
						</Certificate>

						<Certificate
							title="Indústria 4.0"
							subTitle="ISA 10/2018"
							url="https://drive.google.com/file/d/1d-LiznJXUzrkR7D-QqnE0gx-nmnZ5d-e/view?usp=sharing"
						>
							Curso de Indústria 4.0 da Expo ISA Vale Section
							(International Society of Automatio)
						</Certificate>

						<Certificate
							title="PWA - SETI 2018"
							subTitle="ETEC 10/2018"
							url="https://drive.google.com/file/d/1KORp6jQBUU-_LHgh8f1hyYpRuJvZ7rvU/view?usp=sharing"
						>
							Curso de PWA (Progressive Web Apps) feito na SETI 2018 da
							ETEC.
						</Certificate>

						<Certificate
							title="Layout de Sistemas"
							subTitle="ETEC 10/2018"
							url="https://drive.google.com/file/d/15iZjeAkV-0MY0wf9VjqBhw-QGSUPGBUV/view?usp=sharing"
						>
							Palestra Layout de Sistemas: Conceito de Design para
							Programadores feito na SETI 2018 da ETEC.
						</Certificate>

						<Certificate
							title="POO"
							subTitle="Curso em Vídeo 03/2018"
							url="https://drive.google.com/file/d/1nZ9erMyiQ9u1hutbrbJA2ANKQz-hdybX/view?usp=sharing"
						>
							Programação Orientada a Objetos utilizando Java como
							linguagem.
						</Certificate>

						<Certificate
							title="Algoritmo"
							subTitle="Curso em Vídeo 02/2018"
							url="https://drive.google.com/file/d/18BbaQ4iQy1I7vfBJkk2li7-P1oBjfd-i/view?usp=sharing"
						>
							Curso de Algoritmo do Curso em Vídeo utilizando Java como
							linguagem.
						</Certificate>

						<Certificate
							title="Java Básico"
							subTitle="Curso em Vídeo 02/2018"
							url="https://drive.google.com/file/d/1nJPjVwJeFNLt0pg6BsgE7Aa1EyZQYmQW/view?usp=sharing"
						>
							Curso de Java Básico do Curso em Vídeo.
						</Certificate>

						<Certificate
							title="Python Básico"
							subTitle="Curso em Vídeo 02/2018"
							url="https://drive.google.com/file/d/14BvP5xmjSVLi814kXf9aEAy69K2-jqWc/view?usp=sharing"
						>
							Curso de Python Básico do Curso em Vídeo.
						</Certificate>
					</>
				)}
			</div>

			<div className="d-flex justify-content-center mt-3">
				<button
					className="btn btn-danger"
					onClick={() => setShowMore((oldShowMore) => !oldShowMore)}
				>
					{showMore ? 'Mostrar menos' : 'Mostrar mais'}
				</button>
			</div>

			<div className="container" style={{ marginTop: 100 }}>
				<hr />
			</div>

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
							Iniciei meu primeiro emprego na área de Desenvolvimento
							como estagiário na LIAX Tecnologia
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
						<span className="badge bg-primary p-2 ml-1">
							Primeiro emprego
						</span>
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
							Entrei na Faculdade de Tecnologia de Guaratinguetá no curso
							de Análise e Desenvolvimento de Sistemas.
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
							Aqui foi onde tive meu primeiro contato em um curso onde
							comecei a aprender na prática as coisas que eu gostava, que
							era programar. Conheci pessoas incríveis que levo pra vida.
						</p>

						<span className="badge bg-primary p-2">Técnico</span>
					</TimelineItem>
				</Timeline>
			</div>

			<BackToTop showAt={100} speed={500} easing="easeInOutQuint">
				<svg
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					className="bi bi-arrow-up-circle-fill text-dark border-0"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
					/>
				</svg>
			</BackToTop>
		</>
	);
}
