import { useEffect, useState } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import Icon from './Icon';

const Footer: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  useEffect(() => {
    setShow(scrollTop >= 30);
  }, [scrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const newScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setScrollTop(newScrollTop);
    });
  }, []);

  return show ? (
    <nav className="navbar fixed-bottom navbar-light bg-dark d-flex justify-content-center pt-2 pb-2">
      <Reveal animation={Animation.FadeInRight}>
        <Icon
          image={`${process.env.PUBLIC_URL}/assets/icons/linkedin.png`}
          alt="LinkedIn"
          link="https://linkedin.com/in/lucas-bittencourt"
        />

        <Icon
          image={`${process.env.PUBLIC_URL}/assets/icons/stackoverflow.png`}
          alt="StackOverFlow"
          link="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
          additionalClass="ms-2"
        />

        <Icon
          image={`${process.env.PUBLIC_URL}/assets/icons/github.png`}
          alt="GitHub"
          link="https://github.com/lucasgdb"
          additionalClass="ms-2"
        />

        <Icon
          image={`${process.env.PUBLIC_URL}/assets/icons/facebook.png`}
          alt="Facebook"
          link="https://www.facebook.com/lucasgdbittencourt"
          additionalClass="ms-2"
        />

        <Icon
          image={`${process.env.PUBLIC_URL}/assets/icons/whatsapp.png`}
          alt="WhatsApp"
          link="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
          additionalClass="ms-2"
        />

        <Icon
          image={`${process.env.PUBLIC_URL}/assets/icons/telegram.png`}
          alt="Telegram"
          link="tg://resolve?domain=lucasgdb"
          additionalClass="ms-2"
        />
      </Reveal>
    </nav>
  ) : null;
};

export default Footer;
