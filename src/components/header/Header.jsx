import Aos from 'aos';
import { useEffect } from 'react';
import { Logo } from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

export const Header = ({
  servicesSection,
  tarifSection,
  sectorisationSection,
  qualitySection,
  avisSection,
}) => {
  //Utilisation d'AOS pour les effets au Scroll

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <header
      className='header'
      id='header'
      data-aos='fade-down'
      data-aos-duration='500'
    >
      <Logo />
      <NavBar
        servicesSection={servicesSection}
        tarifSection={tarifSection}
        sectorisationSection={sectorisationSection}
        qualitySection={qualitySection}
        avisSection={avisSection}
      />
    </header>
  );
};
