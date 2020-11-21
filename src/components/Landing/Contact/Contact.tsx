import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import Form from './Form';
import SocialNetworks from './SocialNetworks';

const Contact: React.FC = () => (
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
        <Form />
        <SocialNetworks />
      </div>
    </div>
  </div>
);

export default Contact;
