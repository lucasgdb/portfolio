import { TimelineItem } from 'vertical-timeline-component-for-react';
import styled from 'styled-components';

const SubTitle = styled.h2`
  font-size: 19px;
`;

export default function Fatec() {
  return (
    <TimelineItem dateText="CURSANDO" dateInnerStyle={{ background: '#dc3545' }} style={{ color: '#dc3545' }}>
      <h3>Fatec</h3>

      <SubTitle className="text-black-50 fw-bold">Análise e Desenvolvimento de Sistemas</SubTitle>

      <p className="mt-3 mb-0 fw-bold">Destaques</p>
      <ul>
        <li>1° Lugar - 10ª Maratona de Programação da Fatec Guaratinguetá</li>
        <li>1° Lugar - 11ª Maratona de Programação da Fatec Guaratinguetá</li>
        <li>1° Lugar - 1° Hackaton da Fatec Guaratinguetá</li>
      </ul>

      <p>
        Aqui foi onde comecei a criar portfólio como Desenvolvedor, conhecendo e participando de eventos como Hackathons
        e Maratonas de Programação. Além de ter conseguido meu primeiro estágio na área.
      </p>

      <span className="badge bg-primary p-2">Tecnólogo</span>
      <span className="badge bg-success p-2 ms-1">Faculdade</span>
    </TimelineItem>
  );
}
