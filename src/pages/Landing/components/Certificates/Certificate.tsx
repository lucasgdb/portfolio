import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 22rem;
`;

type CertificateProps = {
  title: string;
  subTitle: string;
  text: string;
  url: string;
};

const Certificate: React.FC<CertificateProps> = ({ title, subTitle, text, url }) => (
  <Reveal style={{ width: '100%', maxWidth: '350px' }} animation={Animation.FadeInUp}>
    <CardContainer className="card h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-2">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
          <p className="card-text">{text}</p>
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
          Ver certificado
        </a>
      </div>
    </CardContainer>
  </Reveal>
);

export default Certificate;
