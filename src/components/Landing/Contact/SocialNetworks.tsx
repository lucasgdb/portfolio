import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import SocialNetwork from './SocialNetwork';

const SocialNetworks = () => (
  <div className="col-12 col-md-6 mt-4 order-md-1">
    <Reveal animation={Animation.FadeInLeft}>
      <SocialNetwork
        image="/assets/icons/linkedin.png"
        title="LinkedIn"
        reference="/in/lucas-bittencourt"
        link="https://linkedin.com/in/lucas-bittencourt"
      />

      <SocialNetwork
        image="/assets/icons/stackoverflow.png"
        title="StackOverFlow"
        reference="/lucas-bittencourt"
        link="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
      />

      <SocialNetwork
        image="/assets/icons/github.png"
        title="GitHub"
        reference="/lucasgdb"
        link="https://github.com/lucasgdb"
      />

      <SocialNetwork
        image="/assets/icons/facebook.png"
        title="Facebook"
        reference="/lucasgdbittencourt"
        link="https://www.facebook.com/lucasgdbittencourt"
      />

      <SocialNetwork
        image="/assets/icons/whatsapp.png"
        title="WhatsApp"
        reference="+55 (12) 98834-4336"
        link="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
      />

      <SocialNetwork
        image="/assets/icons/telegram.png"
        title="Telegram"
        reference="@lucasgdb"
        link="tg://resolve?domain=lucasgdb"
      />
    </Reveal>
  </div>
);

export default SocialNetworks;
