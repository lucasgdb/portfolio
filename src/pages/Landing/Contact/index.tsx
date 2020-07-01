import React, { useRef } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import facebookIcon from '~/static/facebook.png';
import githubIcon from '~/static/github.png';
import linkedInIcon from '~/static/linkedin.png';
import stackOverFlowIcon from '~/static/stackoverflow.png';
import telegramIcon from '~/static/telegram.png';
import whatsAppIcon from '~/static/whatsapp.png';

const Contact = () => {
	const form = useRef() as React.MutableRefObject<HTMLFormElement>;

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const currentForm = form.current;

		const formData = new FormData(currentForm);

		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		window.open(
			`https://mail.google.com/mail/u/0/?view=cm&tf=1&su=${name} - ${email}, PORTFÓLIO&to=lucasgdbittencourt@gmail.com&body=${message}`
		);
	};

	return (
		<div
			id="contact"
			className="bg-dark pt-5 pb-5"
			style={{ marginTop: 100 }}
		>
			<Reveal animation={Animation.FadeInUp}>
				<h1 className="text-center text-light underline underline-light mb-4">
					Contato
				</h1>

				<p className="text-center text-white-50">
					Entre em contato comigo de forma rápida!
				</p>
			</Reveal>

			<div className="container mb-4">
				<div className="row">
					<div className="col-12 col-md-6 mt-4 order-md-2">
						<form ref={form} onSubmit={handleOnSubmit}>
							<Reveal animation={Animation.FadeInRight}>
								<div className="mb-3">
									<label
										htmlFor="name"
										className="form-label text-light"
									>
										Nome
									</label>

									<input
										type="text"
										className="form-control"
										id="name"
										name="name"
										placeholder="Ex: Lucas Bittencourt"
										required
									/>
								</div>

								<div className="mb-3">
									<label
										htmlFor="email"
										className="form-label text-light"
									>
										E-mail
									</label>

									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
										placeholder="nome@exemplo.com"
										required
									/>
								</div>

								<div className="mb-3">
									<label
										htmlFor="message"
										className="form-label text-light"
									>
										Mensagem
									</label>

									<textarea
										className="form-control"
										id="message"
										name="message"
										rows={3}
										required
									></textarea>
								</div>

								<button className="btn btn-danger">Enviar</button>
							</Reveal>
						</form>
					</div>

					<div className="col-12 col-md-6 mt-4 order-md-1">
						<div>
							<div className="d-flex align-items-center">
								<img src={linkedInIcon} alt="LinkedIn" width={30} />{' '}
								<h4 className="text-light mb-0 ml-2">LinkedIn</h4>
							</div>

							<a
								href="https://linkedin.com/in/lucas-bittencourt"
								target="_blank"
								rel="noopener noreferrer"
							>
								/in/lucas-bittencourt
							</a>
						</div>

						<div className="mt-3">
							<div className="d-flex align-items-center">
								<img
									src={stackOverFlowIcon}
									alt="StackOverFlow"
									width={30}
								/>{' '}
								<h4 className="text-light mb-0 ml-2">StackOverFlow</h4>
							</div>

							<a
								href="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
								target="_blank"
								rel="noopener noreferrer"
							>
								/lucas-bittencourt
							</a>
						</div>

						<div className="mt-3">
							<div className="d-flex align-items-center">
								<img src={githubIcon} alt="GitHub" width={30} />{' '}
								<h4 className="text-light mb-0 ml-2">GitHub</h4>
							</div>

							<a
								href="https://github.com/lucasgdb"
								target="_blank"
								rel="noopener noreferrer"
							>
								/lucasgdb
							</a>
						</div>

						<div className="mt-3">
							<div className="d-flex align-items-center">
								<img src={facebookIcon} alt="Facebook" width={30} />{' '}
								<h4 className="text-light mb-0 ml-2">Facebook</h4>
							</div>

							<a
								href="https://www.facebook.com/lucasgdbittencourt"
								target="_blank"
								rel="noopener noreferrer"
							>
								/lucasgdbittencourt
							</a>
						</div>

						<div className="mt-3">
							<div className="d-flex align-items-center">
								<img src={whatsAppIcon} alt="WhatsApp" width={30} />{' '}
								<h4 className="text-light mb-0 ml-2">WhatsApp</h4>
							</div>

							<a
								href="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
								target="_blank"
								rel="noopener noreferrer"
							>
								+55 (12) 98834-4336
							</a>
						</div>

						<div className="mt-3">
							<div className="d-flex align-items-center">
								<img src={telegramIcon} alt="Telegram" width={30} />{' '}
								<h4 className="text-light mb-0 ml-2">Telegram</h4>
							</div>

							<a
								href="tg://resolve?domain=lucasgdb"
								target="_blank"
								rel="noopener noreferrer"
							>
								@lucasgdb
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
