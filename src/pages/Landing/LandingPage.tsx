import BackToTopButton from '~/components/BackToTopButton';
import CertificateList from './components/Certificates/CertificateList';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import MyTimeline from './components/MyTimeline/MyTimeline';

const LandingPage = () => (
  <>
    <Header />
    <Introduction />
    <MyTimeline />
    <CertificateList />
    <Contact />
    <Footer />

    <BackToTopButton />
  </>
);

export default LandingPage;
