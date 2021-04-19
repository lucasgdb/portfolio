import { useEffect, useState } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import facebookIcon from '~/static/facebook.png';
import githubIcon from '~/static/github.png';
import linkedInIcon from '~/static/linkedin.png';
import stackOverFlowIcon from '~/static/stackoverflow.png';
import telegramIcon from '~/static/telegram.png';
import whatsAppIcon from '~/static/whatsapp.png';
import Icon from './Icon';

const Footer: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  useEffect(() => {
    setShow(scrollTop >= 30.27);
  }, [scrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const newScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setScrollTop(newScrollTop);
    });
  }, []);

  return show ? (
    <nav className="navbar fixed-bottom navbar-light bg-dark d-flex justify-content-center p-1">
      <Reveal animation={Animation.FadeInRight}>
        <Icon
          image={linkedInIcon}
          alt="LinkedIn"
          link="https://linkedin.com/in/lucas-bittencourt"
        />

        <Icon
          image={stackOverFlowIcon}
          alt="StackOverFlow"
          link="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
          additionalClass="ms-2"
        />

        <Icon
          image={githubIcon}
          alt="GitHub"
          link="https://github.com/lucasgdb"
          additionalClass="ms-2"
        />

        <Icon
          image={facebookIcon}
          alt="Facebook"
          link="https://www.facebook.com/lucasgdbittencourt"
          additionalClass="ms-2"
        />

        <Icon
          image={whatsAppIcon}
          alt="WhatsApp"
          link="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
          additionalClass="ms-2"
        />

        <Icon
          image={telegramIcon}
          alt="Telegram"
          link="tg://resolve?domain=lucasgdb"
          additionalClass="ms-2"
        />
      </Reveal>
    </nav>
  ) : null;
};

export default Footer;
