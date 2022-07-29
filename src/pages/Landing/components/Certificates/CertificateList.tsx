import { useState } from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

import Certificate from './Certificate';
import ToggleButton from './ToggleButton';

const OuterCertificateList = styled.div`
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

type CertificateType = {
  id: number;
  title: string;
  subTitle: string;
  text: string;
  url: string;
};

const CERTIFICATE_LIMIT = 7;

const certificateList: CertificateType[] = [
  {
    id: 0,
    title: 'CSS Grid - Simplificando layouts',
    subTitle: 'Alura 07/2022',
    text: 'Curso básico de CSS Grid.',
    url: 'https://cursos.alura.com.br/certificate/397ff032-020b-48c5-b5f9-d83996dd05fb',
  },
  {
    id: 1,
    title: 'Deploy no Amazon EC2',
    subTitle: 'Alura 09/2019',
    text: 'Deploy no Amazon EC2: Alta Disponibilidade e Escalabilidade de uma Aplicação.',
    url: 'https://cursos.alura.com.br/certificate/1cf36134-cecd-4386-8f48-b3c7eb725bd6',
  },
  {
    id: 2,
    title: 'HTTP - Fundamentos',
    subTitle: 'Alura 09/2019',
    text: 'HTTP - Entendendo a Web por baixo dos panos.',
    url: 'https://cursos.alura.com.br/certificate/1cf36134-cecd-4386-8f48-b3c7eb725bd6',
  },
  {
    id: 3,
    title: 'Docker - Fundamentos',
    subTitle: 'TreinaWeb 08/2019',
    text: 'Curso dos fundamentos do Docker feito na TreinaWeb.',
    url: 'https://drive.google.com/file/d/1eXYWOLmlC1SaO8HScpmMCAI4PaNhUeEC/view?usp=sharing',
  },
  {
    id: 4,
    title: 'JavaScript Avançado',
    subTitle: 'Alura 09/2019',
    text: 'Entendendo mais a fundo o JavaScript ES5.',
    url: 'https://drive.google.com/file/d/1MdGWb8yFg2saHjUn4Y0pBwTcdGmGiABF/view?usp=sharing',
  },
  {
    id: 5,
    title: 'HTML5 e CSS3',
    subTitle: 'Curso em Vídeo 01/2019',
    text: 'Curso básico de HTML5 e CSS3 do Curso em Vídeo.',
    url: 'https://drive.google.com/file/d/1SZjCqoNMD5ZHcKOu6QGJsOoZkwM_bJby/view?usp=sharing',
  },
  {
    id: 6,
    title: 'JavaScript ES6',
    subTitle: 'TreinaWeb 01/2019',
    text: 'Novidades do EcmaScript 2015 (ES6) do JavaScript.',
    url: 'https://drive.google.com/file/d/1nbWhwygwMXWRorjpKqb7H7ov28SxCxoA/view?usp=sharing',
  },
  {
    id: 7,
    title: 'JavaScript Intermediário',
    subTitle: 'TreinaWeb 09/2018',
    text: 'Entendendo melhor o JavaScript ES5.',
    url: 'https://drive.google.com/file/d/1NZkuNnOxn8YUagqlel1TfuspOEmgib0O/view?usp=sharing',
  },
  {
    id: 8,
    title: 'JavaScript Básico',
    subTitle: 'TreinaWeb 08/2018',
    text: 'Começando a entender o JavaScript ES5.',
    url: 'https://drive.google.com/file/d/11nR3Nu1REhJ5_oLVfGo12YBQ_KuopCdr/view?usp=sharing',
  },
  {
    id: 9,
    title: 'HTML5 e CSS3',
    subTitle: 'TreinaWeb 08/2018',
    text: 'Curso de HTML5 e CSS3 Avançado.',
    url: 'https://drive.google.com/file/d/1_SWQS_Yqyv-vWQaH6brIFqNbeO_61HpN/view?usp=sharing',
  },
  {
    id: 10,
    title: 'HTML5 e CSS3',
    subTitle: 'TreinaWeb 08/2018',
    text: 'Curso de HTML5 e CSS3 Básico.',
    url: 'https://drive.google.com/file/d/1_7aj48Ho_7ZEcgyCicNGc5fvy9RSpScc/view?usp=sharing',
  },
  {
    id: 11,
    title: 'Bootstrap 4 - Básico',
    subTitle: 'Curso em Vídeo 01/2019',
    text: 'Curso básico de Bootstrap 4 do Curso em Vídeo.',
    url: 'https://drive.google.com/file/d/1inYX3NMaOSq_CJj6c54-I8ZJ5ypAqz6C/view?usp=sharing',
  },
  {
    id: 12,
    title: 'Algoritmos - Parte 1',
    subTitle: 'TreinaWeb 10/2018',
    text: 'Parte 1 do Curso de Algoritmos da TreinaWeb.',
    url: 'https://drive.google.com/file/d/1d-LiznJXUzrkR7D-QqnE0gx-nmnZ5d-e/view?usp=sharing',
  },
  {
    id: 13,
    title: 'PWA - SETI 2018',
    subTitle: 'ETEC 10/2018',
    text: 'Curso de PWA (Progressive Web Apps) feito na SETI 2018 da ETEC.',
    url: 'https://drive.google.com/file/d/1KORp6jQBUU-_LHgh8f1hyYpRuJvZ7rvU/view?usp=sharing',
  },
  {
    id: 14,
    title: 'Layout de Sistemas',
    subTitle: 'ETEC 10/2018',
    text: 'Palestra Layout de Sistemas: Conceito de Design para Programadores feito na SETI 2018 da ETEC.',
    url: 'https://drive.google.com/file/d/15iZjeAkV-0MY0wf9VjqBhw-QGSUPGBUV/view?usp=sharing',
  },
  {
    id: 15,
    title: 'POO',
    subTitle: 'Curso em Vídeo 03/2018',
    text: 'Programação Orientada a Objetos utilizando Java como linguagem.',
    url: 'https://drive.google.com/file/d/1nZ9erMyiQ9u1hutbrbJA2ANKQz-hdybX/view?usp=sharing',
  },
  {
    id: 16,
    title: 'Algoritmo',
    subTitle: 'Curso em Vídeo 02/2018',
    text: 'Programação Orientada a Objetos utilizando Java como linguagem.',
    url: 'https://drive.google.com/file/d/18BbaQ4iQy1I7vfBJkk2li7-P1oBjfd-i/view?usp=sharing',
  },
];

export default function CertificateList() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prevShowMore) => !prevShowMore);

  return (
    <OuterCertificateList id="certificates">
      <Reveal animation={Animation.FadeInUp}>
        <Title className="text-center text-dark underline">
          <AnimatedTitle animation={Animation.FadeIn}>Certificados</AnimatedTitle>
        </Title>
      </Reveal>

      <div className="d-flex justify-content-center flex-wrap gap-3">
        {certificateList.map((certificate, index) => {
          if (index > CERTIFICATE_LIMIT && !showMore) {
            return null;
          }

          return (
            <Certificate
              key={certificate.id}
              title={certificate.title}
              subTitle={certificate.subTitle}
              text={certificate.text}
              url={certificate.url}
            />
          );
        })}
      </div>

      <ToggleButton showMore={showMore} onClick={toggleShowMore} />
    </OuterCertificateList>
  );
}
