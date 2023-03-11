import { Header } from '../../components/header/Header.jsx';
import ContactBar from '../../components/ContactBar/ContactBar';
import Carrousel from '../../components/Carrousel/Carrousel';
import Services from '../../components/Services/Services.jsx';
import Sectorisation from '../../components/Sectorisation/Sectorisation.jsx';
import Tarifs from '../../components/Tarifs/Tarifs.jsx';
import Qualite from '../../components/Qualite/Qualite.jsx';
import Avis from '../../components/Avis/Avis.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const Home = () => {
  return (
    <section>
      <Header />
      <ContactBar />
      <Carrousel />
      <Services />
      <Sectorisation />
      <Tarifs />
      <Qualite />
      <Avis />
      <Contact />
      <Footer />
    </section>
  );
};
