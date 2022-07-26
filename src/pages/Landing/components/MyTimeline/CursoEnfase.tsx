import { TimelineItem } from 'vertical-timeline-component-for-react';
import styled from 'styled-components';

import Blockquote from '~/components/Blockquote';

const FireIcon = styled.span`
  position: relative;
  top: -2px;
  margin-left: 2px;
`;

const SubTitle = styled.h2`
  font-size: 19px;
`;

const CursoEnfase = () => {
  return (
    <TimelineItem dateText="ATIVO" dateInnerStyle={{ background: '#dc3545' }} style={{ color: '#dc3545' }}>
      <h3>
        Curso Ênfase
        <FireIcon role="img" aria-label="Fire">
          🔥
        </FireIcon>
      </h3>

      <SubTitle className="text-black-50 fw-bold">Desenvolvedor Full Stack</SubTitle>

      <Blockquote className="mt-3">
        JavaScript - React.js (Relay, Material UI, styled-components) &amp; Node.js (GraphQL, Express), PostgreSQL,
        TypeScript, Jest, Docker, AWS &amp; Github Actions.
      </Blockquote>

      <p className="mb-0 fw-bold">Funções:</p>
      <ul>
        <li>Implementar novas funcionalidades nos sistemas.</li>
        <li>Criar interfaces responsivas.</li>
        <li>Realizar manutenção na cloud AWS.</li>
      </ul>

      <p className="mb-0 fw-bold">Dia-a-dia:</p>
      <ul>
        <li>Discutir soluções técnicas e construção da arquitetura com os times de Desenvolvimento e Produto.</li>
        <li>Desenvolver e suportar a aplicação para atender as necessidades do time de Produto</li>
        <li>Construir código bem estruturado, escalável e com qualidade seguindo os padrões e boas práticas</li>
        <li>Realização de Workshops sobre as stacks utilizadas</li>
        <li>Revisar PRs para garantir a qualidade do código e segurança do sistema</li>
        <li>Automatizar processos</li>
        <li>Melhorar a Developer Experience (DX) do time de Desenvolvimento</li>
        <li>Corrigir bugs e realizar manutenções nos sistemas novos e antigos</li>
        <li>Criar testes unitários para garantir o bom funcionamento do código</li>
        <li>Participar da construção das rotinas de trabalho para melhoria contínua dos processos e cultura do time</li>
      </ul>

      <p className="mb-0 fw-bold">Destaques:</p>
      <ul>
        <li>Adicionei TypeScript na codebase e migrei os códigos JavaScript.</li>
        <li>
          Criei uma Lambda Function que converte e gera PDFs para download de resumos e e-books dentro da plataforma
        </li>
        <li>
          Adicionei PWA na Plataforma para possibilitar acesso offline e estratégias de cache, além de download de
          vídeos e podcasts para consumo offline
        </li>
        <li>Publiquei na Play Store o Aplicativo do Curso Ênfase via PWA</li>
        <li>
          Atualizei do Node v8 para v16 e garantir mais segurança, performance, features e uma vida útil maior da
          plataforma
        </li>
        <li>
          Criei wikis para documentar mudanças e tutoriais em relação ao workspace que ajudaram todos os desenvolvedores
          do time
        </li>
        <li>
          Criei todas as telas, funcionalidades e arquitetura do banco em relação ao LGPD para seguir a nova legislação
          que regula as atividades de tratamento de dados pessoais
        </li>
      </ul>

      <span className="badge bg-primary p-2">Full-time</span>
      <span className="badge bg-primary p-2 ms-1">Remoto</span>
    </TimelineItem>
  );
};

export default CursoEnfase;
