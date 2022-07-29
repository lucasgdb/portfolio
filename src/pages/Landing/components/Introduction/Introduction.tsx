import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import styled from 'styled-components';
import DownArrowIcon from './DownArrowIcon';

const OuterIntroduction = styled.div`
  height: 100vh;
`;

export default function Introduction() {
  return (
    <OuterIntroduction className="bg-dark d-flex justify-content-center align-items-center position-relative">
      <div>
        <Reveal animation={Animation.FadeIn}>
          <h1 className="text-light">
            <AnimatedTitle animation={Animation.SlideInLeft}>Lucas Bittencourt</AnimatedTitle>
          </h1>
        </Reveal>

        <Reveal animation={Animation.FadeInUp}>
          <span className="text-danger font-weight-bold">Desenvolvedor Full Stack</span>
        </Reveal>
      </div>

      <a href="#my-timeline">
        <DownArrowIcon />
      </a>
    </OuterIntroduction>
  );
}
