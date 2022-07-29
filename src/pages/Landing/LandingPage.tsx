import BackToTopButton from '~/components/BackToTopButton';
import Header from '~/components/Header';
import CertificateList from './components/Certificates/CertificateList';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Introduction from './components/Introduction/Introduction';
import MyTimeline from './components/MyTimeline/MyTimeline';

export default function LandingPage() {
  return (
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
}
