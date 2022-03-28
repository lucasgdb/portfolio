import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';

const OuterIntroduction = styled.div`
  height: 100vh;
`;

const DownArrowIcon = styled.svg`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Introduction = () => (
  <OuterIntroduction className="bg-dark d-flex justify-content-center align-items-center position-relative">
    <div>
      <Reveal animation={Animation.FadeIn}>
        <h1 className="text-light">
          <AnimatedTitle animation={Animation.SlideInLeft}>Lucas Bittencourt</AnimatedTitle>
        </h1>
      </Reveal>

      <Reveal animation={Animation.FadeInUp}>
        <span className="text-danger font-weight-bold">Desenvolvedor JavaScript</span>
      </Reveal>
    </div>

    <a href="#my-timeline">
      <DownArrowIcon
        width="40"
        height="40"
        viewBox="0 0 16 16"
        className="bi bi-arrow-down-circle-fill text-light position-absolute up-down-effect"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
        />
      </DownArrowIcon>
    </a>
  </OuterIntroduction>
);

export default Introduction;
