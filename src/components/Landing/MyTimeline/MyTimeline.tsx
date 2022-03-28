import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import CursoEnfase from './CursoEnfase';
import Etec from './Etec';
import Fatec from './Fatec';
import LIAX from './LIAX';

const MyTimeLine = () => (
  <div id="my-timeline">
    <Reveal animation={Animation.FadeInUp}>
      <h1 className="text-center text-dark underline" style={{ marginTop: 100, marginBottom: 100 }}>
        Linha do tempo
      </h1>
    </Reveal>

    <Timeline lineColor="#ddd" className="mt-0 mb-0">
      <CursoEnfase />
      <LIAX />
      <Fatec />
      <Etec />
    </Timeline>
  </div>
);

export default MyTimeLine;
