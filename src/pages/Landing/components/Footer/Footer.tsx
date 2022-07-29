import { useEffect, useState } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import Icon from './Icon';

export default function Footer() {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(window.pageYOffset || document.documentElement.scrollTop);

  useEffect(() => {
    setShow(scrollTop >= 30);
  }, [scrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setScrollTop(newScrollTop);
    });
  }, []);

  if (!show) {
    return null;
  }

  return (
    <nav className="navbar fixed-bottom navbar-light bg-dark d-flex justify-content-center pt-2 pb-2">
      <Reveal animation={Animation.FadeInRight}>
        <Icon image="/assets/icons/linkedin.png" alt="LinkedIn" link="https://linkedin.com/in/lucas-bittencourt" />

        <Icon
          image="/assets/icons/stackoverflow.png"
          alt="StackOverflow"
          link="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
          additionalClass="ms-2"
        />

        <Icon image="/assets/icons/github.png" alt="GitHub" link="https://github.com/lucasgdb" additionalClass="ms-2" />

        <Icon
          image="/assets/icons/whatsapp.png"
          alt="WhatsApp"
          link="https://api.whatsapp.com/send?phone=5512988344336&amp;text=Oi, Lucas!"
          additionalClass="ms-2"
        />

        <Icon
          image="/assets/icons/telegram.png"
          alt="Telegram"
          link="tg://resolve?domain=lucasgdb"
          additionalClass="ms-2"
        />
      </Reveal>
    </nav>
  );
}
