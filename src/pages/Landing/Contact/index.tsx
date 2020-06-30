import React, { useRef } from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

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
			`https://mail.google.com/mail/u/0/?view=cm&tf=1&su=Portfólio&to=lucasgdbittencourt@gmail.com&body=${name}, ${email}, ${message}`
		);
	};

	return (
		<div id="contact" className="bg-dark pt-5 pb-5">
			<Reveal animation={Animation.FadeInUp}>
				<h1 className="text-center text-light underline underline-light position-relative">
					<AnimatedTitle animation={Animation.FadeInUp}>
						Contato
					</AnimatedTitle>
				</h1>
			</Reveal>

			<form ref={form} onSubmit={handleOnSubmit}>
				<div className="container mt-5">
					<Reveal animation={Animation.FadeInRight}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label text-light">
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
							<label htmlFor="email" className="form-label text-light">
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
							<label htmlFor="message" className="form-label text-light">
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
				</div>
			</form>
		</div>
	);
};

export default Contact;
