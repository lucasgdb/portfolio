import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

import Form from './Form';
import SocialNetworks from './SocialNetworks';

const OuterContact = styled.div`
  padding: 76px 0 100px;
  margin-top: 24px;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Contact() {
  return (
    <OuterContact id="contact" className="bg-dark">
      <Reveal animation={Animation.FadeInUp}>
        <h1 className="text-center text-light underline underline-light mb-4">Contato</h1>

        <p className="text-center text-white-50">Entre em contato comigo de forma rápida!</p>
      </Reveal>

      <div className="container ps-4 pe-4">
        <div className="row">
          <Form />
          <SocialNetworks />
        </div>
      </div>
    </OuterContact>
  );
}
