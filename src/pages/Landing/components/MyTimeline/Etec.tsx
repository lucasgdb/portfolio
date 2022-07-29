import { TimelineItem } from 'vertical-timeline-component-for-react';
import styled from 'styled-components';

const SubTitle = styled.h2`
  font-size: 19px;
`;

export default function Etec() {
  return (
    <TimelineItem dateText="CONCLUÍDO" dateInnerStyle={{ background: '#0F9D58' }} style={{ color: '#0F9D58' }}>
      <h3>Etec</h3>

      <SubTitle className="text-black-50 fw-bold">Desenvolvimento de Sistemas</SubTitle>

      <p className="mt-3">
        Na Etec Guaratinguetá foi onde tive meu primeiro contato com um ambiente focado no ensino de Desenvolvimento.
      </p>

      <span className="badge bg-primary p-2">Técnico</span>
      <span className="badge bg-success p-2 ms-1">Escola Técnica</span>
    </TimelineItem>
  );
}
