import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import facebookIcon from '~/static/facebook.png';
import githubIcon from '~/static/github.png';
import linkedInIcon from '~/static/linkedin.png';
import stackOverFlowIcon from '~/static/stackoverflow.png';
import telegramIcon from '~/static/telegram.png';
import whatsAppIcon from '~/static/whatsapp.png';
import SocialNetwork from './SocialNetwork';

const SocialNetworks: React.FC = () => (
  <div className="col-12 col-md-6 mt-4 order-md-1">
    <Reveal animation={Animation.FadeInLeft}>
      <SocialNetwork
        image={linkedInIcon}
        title="LinkedIn"
        reference="/in/lucas-bittencourt"
        link="https://linkedin.com/in/lucas-bittencourt"
      />

      <SocialNetwork
        image={stackOverFlowIcon}
        title="StackOverFlow"
        reference="/lucas-bittencourt"
        link="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
      />

      <SocialNetwork
        image={githubIcon}
        title="GitHub"
        reference="/lucasgdb"
        link="https://github.com/lucasgdb"
      />

      <SocialNetwork
        image={facebookIcon}
        title="Facebook"
        reference="/lucasgdbittencourt"
        link="https://www.facebook.com/lucasgdbittencourt"
      />

      <SocialNetwork
        image={whatsAppIcon}
        title="WhatsApp"
        reference="+55 (12) 98834-4336"
        link="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
      />

      <SocialNetwork
        image={telegramIcon}
        title="Telegram"
        reference="@lucasgdb"
        link="tg://resolve?domain=lucasgdb"
      />
    </Reveal>
  </div>
);

export default SocialNetworks;
