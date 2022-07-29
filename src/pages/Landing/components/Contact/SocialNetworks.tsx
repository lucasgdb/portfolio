import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import SocialNetwork from './SocialNetwork';

type SocialNetworkType = {
  id: number;
  image: string;
  title: string;
  reference: string;
  link: string;
};

const socialNetworks: SocialNetworkType[] = [
  {
    id: 0,
    image: '/assets/icons/linkedin.png',
    title: 'LinkedIn',
    reference: '/in/lucas-bittencourt',
    link: 'https://linkedin.com/in/lucas-bittencourt',
  },
  {
    id: 1,
    image: '/assets/icons/stackoverflow.png',
    title: 'StackOverflow',
    reference: '/lucas-bittencourt',
    link: 'https://pt.stackoverflow.com/users/93508/lucas-bittencourt',
  },
  {
    id: 2,
    image: '/assets/icons/github.png',
    title: 'GitHub',
    reference: '/lucasgdb',
    link: 'https://github.com/lucasgdb',
  },
  {
    id: 3,
    image: '/assets/icons/whatsapp.png',
    title: 'WhatsApp',
    reference: '+55 (12) 98834-4336',
    link: 'https://api.whatsapp.com/send?phone=5512988344336&amp;text=Oi, Lucas!',
  },
  {
    id: 4,
    image: '/assets/icons/telegram.png',
    title: 'Telegram',
    reference: '@lucasgdb',
    link: 'tg://resolve?domain=lucasgdb',
  },
];

export default function SocialNetworks() {
  return (
    <div className="col-12 col-md-6 mt-4 order-md-1">
      <Reveal animation={Animation.FadeInLeft}>
        {socialNetworks.map((socialNetwork) => (
          <SocialNetwork
            key={socialNetwork.id}
            image={socialNetwork.image}
            title={socialNetwork.title}
            reference={socialNetwork.reference}
            link={socialNetwork.link}
          />
        ))}
      </Reveal>
    </div>
  );
}
