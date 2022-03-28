import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Timeline } from 'vertical-timeline-component-for-react';
import styled from 'styled-components';

import CursoEnfase from './CursoEnfase';
import Etec from './Etec';
import Fatec from './Fatec';
import LIAX from './LIAX';

const OuterMyTimeline = styled.div`
  padding-top: 100px;
`;

const Title = styled.h1`
  margin-bottom: 100px;
`;

const MyTimeline = () => (
  <OuterMyTimeline id="my-timeline">
    <Reveal animation={Animation.FadeInUp}>
      <Title className="text-center text-dark underline">Linha do tempo</Title>
    </Reveal>

    <Timeline lineColor="#ddd" className="mt-0 mb-0">
      <CursoEnfase />
      <LIAX />
      <Fatec />
      <Etec />
    </Timeline>
  </OuterMyTimeline>
);

export default MyTimeline;
