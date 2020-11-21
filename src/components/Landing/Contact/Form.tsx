import React, { useRef } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

const Form: React.FC = () => {
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
    <div className="col-12 col-md-6 mt-4 order-md-2 border-md-left">
      <form
        ref={form}
        onSubmit={handleOnSubmit}
        className="contact-form-mobile"
        style={{ maxWidth: 350 }}
      >
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
            <label htmlFor="title" className="form-label text-light">
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
            <label htmlFor="message" className="form-label text-light">
              Mensagem
            </label>

            <textarea
              className="form-control"
              placeholder="Oi, Lucas!"
              id="message"
              name="message"
              rows={3}
              required
            />
          </div>

          <button type="button" className="btn btn-danger w-100">
            Enviar
          </button>
        </Reveal>
      </form>
    </div>
  );
};

export default Form;
