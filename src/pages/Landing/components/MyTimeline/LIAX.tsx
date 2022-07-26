import { TimelineItem } from 'vertical-timeline-component-for-react';
import styled from 'styled-components';

import Blockquote from '~/components/Blockquote';

const SubTitle = styled.h2`
  font-size: 19px;
`;

const LIAX = () => {
  return (
    <TimelineItem dateText="CONCLUÍDO" dateInnerStyle={{ background: '#0F9D58' }} style={{ color: '#0F9D58' }}>
      <h3>LIAX</h3>

      <SubTitle className="text-black-50 fw-bold">Estagiário Desenvolvedor</SubTitle>

      <Blockquote className="mt-3">React.js, Java, .NET Core 3.1, Docker, PostgreSQL &amp; MySQL</Blockquote>

      <p className="mb-0 fw-bold">Funções:</p>
      <ul>
        <li>Criar funcionalidades e definir regras de negócio.</li>
        <li>Criar interfaces responsivas.</li>
      </ul>

      <p className="mb-0 fw-bold">Dia-a-dia:</p>
      <ul>
        <li>Discutir e fazer estimativas das tarefas a serem feitas</li>
        <li>Realizar as tarefas de acordo com os sprint points estimados</li>
        <li>Fazer análise e documentação dos projetos com outros estagiários</li>
        <li>Revisar PRs para aprender e garantir padrões e boas práticas de código</li>
      </ul>

      <span className="badge bg-primary p-2">Estágio</span>
    </TimelineItem>
  );
};

export default LIAX;
