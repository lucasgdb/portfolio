import { useState } from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

import Certificate from './Certificate';
import MoreCertificates from './MoreCertificates';
import ShowMore from './ShowMoreButton';

const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 94px;
`;

const Certificates: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="certificates">
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

        <MoreCertificates showMore={showMore} />
      </div>

      <ShowMore showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
};

export default Certificates;
