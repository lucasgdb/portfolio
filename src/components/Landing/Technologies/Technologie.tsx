import { Fragment } from 'react';
import { Reveal } from 'react-genie';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 22rem;
`;

type ProgressBarProps = {
  width: number;
};

const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ width }) => `${width}%`};
`;

type TechnologieType = {
  id: number;
  name: string;
  value: number;
};

type TechnologieProps = {
  title: string;
  subTitle: string;
  technologies: TechnologieType[];
  reveal: string;
};

const Technologie: React.FC<TechnologieProps> = ({
  title,
  subTitle,
  technologies,
  reveal,
}) => (
  <Reveal
    animation={reveal}
    style={{ margin: 10, width: '100%', maxWidth: '22rem' }}
  >
    <CardContainer className="card h-100">
      <div className="card-body">
        <h5 className="card-title font-weight-bolder">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
        <div className="card-text">
          {technologies.map((technologie) => (
            <Fragment key={technologie.id}>
              <p className="mt-3 mb-1 text-dark">{technologie.name}</p>

              <div className="progress">
                <ProgressBar
                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  width={technologie.value}
                  role="progressbar"
                  aria-valuenow={technologie.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </CardContainer>
  </Reveal>
);

export default Technologie;
