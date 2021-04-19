import BackToTopButton from '~/components/BackToTopButton';
import Header from '~/components/Header';
import Certificates from '~/components/Landing/Certificates/Certificates';
import Contact from '~/components/Landing/Contact/Contact';
import Footer from '~/components/Landing/Footer/Footer';
import Introduction from '~/components/Landing/Introduction';
import MyTimeline from '~/components/Landing/MyTimeline';

const LandingPage: React.FC = () => (
  <>
    <Header />
    <Introduction />
    <MyTimeline />
    <Certificates />
    <Contact />
    <Footer />

    <BackToTopButton />
  </>
);

export default LandingPage;
