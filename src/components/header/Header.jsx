import { Logo } from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

export const Header = ({
  servicesSection,
  tarifSection,
  sectorisationSection,
  qualitySection,
  avisSection,
}) => {
  return (
    <header className='header' id='header'>
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
