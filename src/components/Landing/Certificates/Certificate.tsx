import React from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

type CertificateProps = {
  title: string;
  subTitle: string;
  url: string;
};

const CardContainer = styled.div`
  width: 100%;
  max-width: 22rem;
`;

const Certificate: React.FC<CertificateProps> = ({
  children,
  title,
  subTitle,
  url,
}) => (
  <Reveal
    style={{ margin: 10, width: '100%', maxWidth: '22rem' }}
    animation={Animation.FadeInUp}
  >
    <CardContainer className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
        <p className="card-text">{children}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Ver certificado
        </a>
      </div>
    </CardContainer>
  </Reveal>
);

export default Certificate;
