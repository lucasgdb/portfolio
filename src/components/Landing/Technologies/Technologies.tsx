import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';
import Technologie from './Technologie';

const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Technologies: React.FC = () => (
  <div id="technologies">
    <Reveal animation={Animation.FadeInUp}>
      <Title className="text-center text-dark underline">Tecnologias</Title>
    </Reveal>

    <div className="d-flex justify-content-center flex-wrap">
      <Technologie
        title="Tecnologias"
        subTitle="Mais populares"
        technologies={[
          { id: 1, name: 'GitHub', value: 100 },
          { id: 2, name: 'Git', value: 92 },
          { id: 3, name: 'Docker', value: 83 },
          { id: 4, name: 'TypeScript', value: 74 },
          { id: 5, name: 'React.js', value: 85 },
          { id: 6, name: 'Node.js', value: 80 },
          { id: 7, name: 'Bootstrap', value: 90 },
          { id: 8, name: 'Material UI', value: 95 },
          { id: 9, name: 'Linux', value: 85 },
        ]}
        reveal={Animation.FadeInLeft}
      />

      <Technologie
        title="Linguagens"
        subTitle="Mais populares"
        technologies={[
          { id: 1, name: 'JavaScript', value: 100 },
          { id: 2, name: 'HTML5', value: 95 },
          { id: 3, name: 'CSS3', value: 75 },
          { id: 4, name: 'C#', value: 50 },
          { id: 5, name: 'Java', value: 50 },
        ]}
        reveal={Animation.FadeInRight}
      />
    </div>
  </div>
);

export default Technologies;
