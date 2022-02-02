import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import SocialNetwork from './SocialNetwork';

const SocialNetworks: React.FC = () => (
  <div className="col-12 col-md-6 mt-4 order-md-1">
    <Reveal animation={Animation.FadeInLeft}>
      <SocialNetwork
        image={`${process.env.PUBLIC_URL}/assets/icons/linkedin.png`}
        title="LinkedIn"
        reference="/in/lucas-bittencourt"
        link="https://linkedin.com/in/lucas-bittencourt"
      />

      <SocialNetwork
        image={`${process.env.PUBLIC_URL}/assets/icons/stackoverflow.png`}
        title="StackOverFlow"
        reference="/lucas-bittencourt"
        link="https://pt.stackoverflow.com/users/93508/lucas-bittencourt"
      />

      <SocialNetwork
        image={`${process.env.PUBLIC_URL}/assets/icons/github.png`}
        title="GitHub"
        reference="/lucasgdb"
        link="https://github.com/lucasgdb"
      />

      <SocialNetwork
        image={`${process.env.PUBLIC_URL}/assets/icons/facebook.png`}
        title="Facebook"
        reference="/lucasgdbittencourt"
        link="https://www.facebook.com/lucasgdbittencourt"
      />

      <SocialNetwork
        image={`${process.env.PUBLIC_URL}/assets/icons/whatsapp.png`}
        title="WhatsApp"
        reference="+55 (12) 98834-4336"
        link="https://api.whatsapp.com/send?phone=5512988344336&text=Oi, Lucas!"
      />

      <SocialNetwork
        image={`${process.env.PUBLIC_URL}/assets/icons/telegram.png`}
        title="Telegram"
        reference="@lucasgdb"
        link="tg://resolve?domain=lucasgdb"
      />
    </Reveal>
  </div>
);

export default SocialNetworks;
