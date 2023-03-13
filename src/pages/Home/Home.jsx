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
import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const Home = () => {
  const [modale, setModale] = useState(false);

  return (
    <section>
      <ModalContext.Provider value={{ modale, setModale }}>
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
      </ModalContext.Provider>
    </section>
  );
};
