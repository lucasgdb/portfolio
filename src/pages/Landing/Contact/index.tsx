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

		const formData = new FormData(form.current);
		const name = formData.get('name');
		const title = formData.get('title');
		const message = formData.get('message');

		window.open(
			`https://mail.google.com/mail/u/0/?view=cm&tf=1&su=${title} - ${name}&to=lucasgdbittencourt@gmail.com&body=${message}`
		);
	};

	return (
		<div
			id="contact"
			className="bg-dark pb-5"
			style={{ marginTop: 100, paddingTop: 50 }}
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
					<div className="col-12 col-md-6 mt-4 order-md-2 border-md-left">
						<form
							ref={form}
							onSubmit={handleOnSubmit}
							className="contact-form-mobile"
							style={{ maxWidth: 350 }}
						>
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
										htmlFor="title"
										className="form-label text-light"
									>
										Título
									</label>

									<input
										type="text"
										className="form-control"
										id="title"
										name="title"
										placeholder="Ex: Dúvidas sobre você"
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
										placeholder="Oi, Lucas!"
										id="message"
										name="message"
										rows={3}
										required
									></textarea>
								</div>

								<button className="btn btn-danger w-100">Enviar</button>
							</Reveal>
						</form>
					</div>

					<div className="col-12 col-md-6 mt-4 order-md-1">
						<Reveal animation={Animation.FadeInLeft}>
							<div className="d-flex flex-column align-items-md-end">
								<div className="d-flex align-items-center">
									<img
										className="order-md-2"
										src={linkedInIcon}
										alt="LinkedIn"
										width={30}
									/>{' '}
									<h4 className="text-light mb-0 ml-2 mr-2 order-md-1">
										LinkedIn
									</h4>
								</div>

								<a
									className="text-light"
									href="https://linkedin.com/in/lucas-bittencourt"
									target="_blank"
									rel="noopener noreferrer"
								>
									/in/lucas-bittencourt
								</a>
							</div>

							<div className="d-flex flex-column align-items-md-end mt-3">
								<div className="d-flex align-items-center">
									<img
										className="order-md-2"
										src={stackOverFlowIcon}
										alt="StackOverFlow"
										width={30}
									/>{' '}
									<h4 className="text-light mb-0 ml-2 mr-2 order-md-1">
										StackOverFlow
									</h4>
								</div>

								<a
									className="text-light"
									href="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
									target="_blank"
									rel="noopener noreferrer"
								>
									/lucas-bittencourt
								</a>
							</div>

							<div className="d-flex flex-column align-items-md-end mt-3">
								<div className="d-flex align-items-center">
									<img
										className="order-md-2"
										src={githubIcon}
										alt="GitHub"
										width={30}
									/>{' '}
									<h4 className="text-light mb-0 ml-2 mr-2 order-md-1">
										GitHub
									</h4>
								</div>

								<a
									className="text-light"
									href="https://github.com/lucasgdb"
									target="_blank"
									rel="noopener noreferrer"
								>
									/lucasgdb
								</a>
							</div>

							<div className="d-flex flex-column align-items-md-end mt-3">
								<div className="d-flex align-items-center">
									<img
										className="order-md-2"
										src={facebookIcon}
										alt="Facebook"
										width={30}
									/>{' '}
									<h4 className="text-light mb-0 ml-2 mr-2 order-md-1">
										Facebook
									</h4>
								</div>

								<a
									className="text-light"
									href="https://www.facebook.com/lucasgdbittencourt"
									target="_blank"
									rel="noopener noreferrer"
								>
									/lucasgdbittencourt
								</a>
							</div>

							<div className="d-flex flex-column align-items-md-end mt-3">
								<div className="d-flex align-items-center">
									<img
										className="order-md-2"
										src={whatsAppIcon}
										alt="WhatsApp"
										width={30}
									/>{' '}
									<h4 className="text-light mb-0 ml-2 mr-2 order-md-1">
										WhatsApp
									</h4>
								</div>

								<a
									className="text-light"
									href="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
									target="_blank"
									rel="noopener noreferrer"
								>
									+55 (12) 98834-4336
								</a>
							</div>

							<div className="d-flex flex-column align-items-md-end mt-3">
								<div className="d-flex align-items-center">
									<img
										className="order-md-2"
										src={telegramIcon}
										alt="Telegram"
										width={30}
									/>{' '}
									<h4 className="text-light mb-0 ml-2 mr-2 order-md-1">
										Telegram
									</h4>
								</div>

								<a
									className="text-light"
									href="tg://resolve?domain=lucasgdb"
									target="_blank"
									rel="noopener noreferrer"
								>
									@lucasgdb
								</a>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
