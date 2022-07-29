import { useEffect, useState } from 'react';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import Icon from './Icon';

type IconType = {
  id: number;
  image: string;
  alt: string;
  link: string;
};

const icons: IconType[] = [
  {
    id: 0,
    image: '/assets/icons/linkedin.png',
    alt: 'LinkedIn',
    link: 'https://linkedin.com/in/lucas-bittencourt',
  },
  {
    id: 1,
    image: '/assets/icons/stackoverflow.png',
    alt: 'StackOverflow',
    link: 'https://pt.stackoverflow.com/users/93508/lucas-bittencourt',
  },
  {
    id: 2,
    image: '/assets/icons/github.png',
    alt: 'GitHub',
    link: 'https://github.com/lucasgdb',
  },
  {
    id: 3,
    image: '/assets/icons/whatsapp.png',
    alt: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=5512988344336&amp;text=Oi, Lucas!',
  },
  {
    id: 4,
    image: '/assets/icons/telegram.png',
    alt: 'Telegram',
    link: 'tg://resolve?domain=lucasgdb',
  },
];

export default function Footer() {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(window.pageYOffset || document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollTop(newScrollTop);
    });
  }, []);

  useEffect(() => {
    setShow(scrollTop >= 30);
  }, [scrollTop]);

  if (!show) {
    return null;
  }

  return (
    <nav className="navbar fixed-bottom navbar-light bg-dark d-flex justify-content-center pt-2 pb-2">
      <Reveal animation={Animation.FadeInRight}>
        {icons.map((icon) => (
          <Icon key={icon.id} image={icon.image} alt={icon.alt} link={icon.link} />
        ))}
      </Reveal>
    </nav>
  );
}
