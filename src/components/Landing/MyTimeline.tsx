import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const MyTimeLine: React.FC = () => (
  <div id="my-timeline">
    <Reveal animation={Animation.FadeInUp}>
      <h1
        className="text-center text-dark underline"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        Linha do tempo
      </h1>
    </Reveal>

    <Timeline lineColor="#ddd" className="mt-0 mb-0">
      <TimelineItem
        dateText="03/08/2020 - Atualmente"
        dateInnerStyle={{ background: '#dc3545' }}
        dateStyle={{ minWidth: 250 }}
        style={{ color: '#dc3545' }}
      >
        <h3>
          Ênfase Labs
          <span role="img" aria-label="Fire">
            🔥
          </span>
        </h3>
        <h4 className="text-black-50">Engenheiro de Software Full Stack</h4>

        <p className="mt-4">
          Ênfase é Líder na área de concursos jurídicos federais. Nosso foco é
          no desenvolvimento de plataformas e serviços que otimizem a
          aprendizagem dos nossos alunos.
        </p>
        <p>
          Lá trabalhamos com várias tecnologias, como React.js, Node.js, Relay,
          GraphQL, Postgres, Docker, Python, AWS, entre outras.
        </p>

        <span className="badge bg-primary p-2">CLT</span>
        <span className="badge bg-primary p-2 ml-1">Remoto</span>
      </TimelineItem>

      <TimelineItem
        dateText="10/02/2020 - 31/07/2020"
        dateInnerStyle={{ background: '#0F9D58' }}
        dateStyle={{ minWidth: 250 }}
        style={{ color: '#0F9D58' }}
      >
        <h3>LIAX Tecnologia</h3>
        <h4 className="text-black-50">Estagiário Desenvolvedor</h4>

        <p className="mt-4">
          Iniciei meu primeiro emprego na área de Desenvolvimento como
          estagiário na LIAX Tecnologia
        </p>
        <p>
          Lá trabalhamos com várias tecnologias, como C#, Java, PHP, JavaScript,
          React, Docker, Git, entre outras.
        </p>

        <span className="badge bg-primary p-2">Estágio</span>
      </TimelineItem>

      <TimelineItem
        dateText="26/01/2019 - Atualmente"
        dateInnerStyle={{ background: '#dc3545' }}
        dateStyle={{ minWidth: 250 }}
        style={{ color: '#dc3545' }}
      >
        <h3>Fatec Guaratinguetá</h3>
        <h4 className="text-black-50">Análise e Desenvolvimento de Sistemas</h4>

        <p className="mt-4">
          Entrei na Faculdade de Tecnologia de Guaratinguetá no curso de Análise
          e Desenvolvimento de Sistemas.
        </p>
        <p>
          Aqui foi onde comecei a criar portfólio como Desenvolvedor,
          participando de eventos como Hackathons e Maratonas de Programação.
        </p>

        <span className="badge bg-primary p-2">Tecnólogo</span>
        <span className="badge bg-success p-2 ml-1">Faculdade</span>
      </TimelineItem>

      <TimelineItem
        dateText="24/07/2018 - 06/12/2019"
        style={{ color: '#0F9D58' }}
        dateStyle={{ minWidth: 250 }}
        dateInnerStyle={{ background: '#0F9D58' }}
      >
        <h3>Etec Guaratinguetá</h3>
        <h4 className="text-black-50">Desenvolvimento de Sistemas</h4>

        <p className="mt-4">
          Entrei na Escola Técnica de Guaratinguetá no curso de Desenvolvimento
          de Sistemas.
        </p>
        <p>
          Aqui foi onde tive meu primeiro contato em um curso onde comecei a
          aprender na prática as coisas que eu gostava, que era programar.
          Conheci pessoas incríveis que levo pra vida.
        </p>

        <span className="badge bg-primary p-2">Técnico</span>
        <span className="badge bg-success p-2 ml-1">Escola Técnica</span>
      </TimelineItem>
    </Timeline>
  </div>
);

export default MyTimeLine;
