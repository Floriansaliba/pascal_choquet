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
import { createContext, useEffect, useRef, useState } from 'react';
import MobileNav from '../../components/MobileNav/MobileNav.jsx';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.jsx';
import Mentions from '../../components/Mentions/Mentions.jsx';

import 'aos/dist/aos.css';
import { GridLoader } from 'react-spinners';

export const ModalContext = createContext();
export const MobileNavContext = createContext();
export const MentionsContext = createContext();

export const Home = () => {
  const [modale, setModale] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [mentions, setMentions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const servicesSection = useRef(null);
  const sectorisationSection = useRef(null);
  const tarifSection = useRef(null);
  const qualitySection = useRef(null);
  const avisSection = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <MentionsContext.Provider value={{ mentions, setMentions }}>
      <ModalContext.Provider value={{ modale, setModale }}>
        <MobileNavContext.Provider value={{ mobileNav, setMobileNav }}>
          {isLoading ? (
            <div
              className='loader-container'
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GridLoader color='#f7b432' loading={isLoading} width='40%' />
            </div>
          ) : (
            <section id='home'>
              <Header
                servicesSection={servicesSection}
                tarifSection={tarifSection}
                sectorisationSection={sectorisationSection}
                qualitySection={qualitySection}
                avisSection={avisSection}
              />
              <MobileNav
                setMobileNav={setMobileNav}
                servicesSection={servicesSection}
                tarifSection={tarifSection}
                sectorisationSection={sectorisationSection}
                qualitySection={qualitySection}
                avisSection={avisSection}
              />
              <ContactBar />

              <Carrousel />

              <div
                id='main-content'
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <Services servicesSection={servicesSection} />
                <Sectorisation sectorisationSection={sectorisationSection} />
                <Tarifs tarifSection={tarifSection} />
                <Qualite qualitySection={qualitySection} />
                <Avis avisSection={avisSection} />
                <Contact />
                <Footer mentions={mentions} setMentions={setMentions} />
                <Mentions mentions={mentions} setMentions={setMentions} />
              </div>
              <ScrollToTop />
            </section>
          )}
        </MobileNavContext.Provider>
      </ModalContext.Provider>
    </MentionsContext.Provider>
  );
};
