import { useState } from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

import Certificate from './Certificate';
import MoreCertificates from './MoreCertificates';
import ShowMore from './ShowMoreButton';

const OuterCertificates = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 76px 24px 100px;
  margin-top: 24px;
`;

const Title = styled.h1`
  margin-bottom: 94px;
`;

const Certificates = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <OuterCertificates id="certificates">
      <Reveal animation={Animation.FadeInUp}>
        <Title className="text-center text-dark underline">
          <AnimatedTitle animation={Animation.FadeIn}>Certificados</AnimatedTitle>
        </Title>
      </Reveal>

      <div className="d-flex justify-content-center flex-wrap">
        <Certificate
          title="HTTP - Fundamentos"
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
          title="JavaScript Avançado"
          subTitle="TreinaWeb 10/2018"
          url="https://drive.google.com/file/d/1MdGWb8yFg2saHjUn4Y0pBwTcdGmGiABF/view?usp=sharing"
        >
          Entendendo mais a fundo o JavaScript ES5.
        </Certificate>

        <Certificate
          title="HTML5 e CSS3"
          subTitle="Curso em Vídeo 01/2019"
          url="https://drive.google.com/file/d/1SZjCqoNMD5ZHcKOu6QGJsOoZkwM_bJby/view?usp=sharing"
        >
          Curso básico de HTML5 e CSS3 do Curso em Vídeo (Gustavo Guanabara)
        </Certificate>

        <Certificate
          title="React Conf - Participação"
          subTitle="React Conf 11/2020"
          url="https://drive.google.com/file/d/1t7qi6oUSvV2huw1QJ2kUzv5eNqRDG8CN/view?usp=sharing"
        >
          Participação no evento da React Conf 2020
        </Certificate>

        <Certificate
          title="JavaScript ES6"
          subTitle="TreinaWeb 01/2019"
          url="https://drive.google.com/file/d/1nbWhwygwMXWRorjpKqb7H7ov28SxCxoA/view?usp=sharing"
        >
          Novidades do EcmaScript 2015 (ES6) do JavaScript.
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

        <MoreCertificates showMore={showMore} />
      </div>

      <ShowMore showMore={showMore} setShowMore={setShowMore} />
    </OuterCertificates>
  );
};

export default Certificates;
