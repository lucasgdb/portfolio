import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '~/components/Header';

const Error404PageContainer = styled.div`
  height: 100vh;
`;

const Error404Page: React.FC = () => (
  <>
    <Header />

    <Error404PageContainer className="bg-dark d-flex justify-content-center align-items-center">
      <Reveal animation={Animation.FadeInUp}>
        <h1 className="text-white-50">
          <AnimatedTitle animation={Animation.FadeInUp}>Esta página não existe.</AnimatedTitle>
        </h1>

        <Link className="text-danger text-decoration-none" to="/">
          <AnimatedTitle animation={Animation.FadeInUp}>Clique aqui para voltar</AnimatedTitle>
        </Link>
      </Reveal>
    </Error404PageContainer>
  </>
);

export default Error404Page;
