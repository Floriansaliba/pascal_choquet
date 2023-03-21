import React, { useContext } from 'react';
import { MobileNavContext, ModalContext } from '../../pages/Home/Home';

function MobileNav({
  servicesSection,
  tarifSection,
  sectorisationSection,
  qualitySection,
  avisSection,
  setMobileNav,
}) {
  const { mobileNav } = useContext(MobileNavContext);
  const { setModale } = useContext(ModalContext);

  const scrollToElement = (refElement) => {
    refElement.current.scrollIntoView({ behavior: 'smooth' });
    setMobileNav(false);
  };

  if (mobileNav) {
    return (
      <nav className='mobile-nav'>
        <ul className='mobile-nav__list'>
          <li
            onClick={() => {
              scrollToElement(servicesSection);
            }}
            className='mobile-nav__list__li'
          >
            SERVICES
          </li>
          <li
            onClick={() => {
              scrollToElement(sectorisationSection);
            }}
            className='mobile-nav__list__li'
          >
            SECTORISATION
          </li>
          <li
            onClick={() => {
              scrollToElement(tarifSection);
            }}
            className='mobile-nav__list__li'
          >
            TARIFS
          </li>
          <li
            onClick={() => {
              scrollToElement(qualitySection);
            }}
            className='mobile-nav__list__li'
          >
            QUALITE
          </li>
          <li
            onClick={() => {
              scrollToElement(avisSection);
            }}
            className='mobile-nav__list__li'
          >
            AVIS CLIENTS
          </li>

          <li
            onClick={(e) => {
              e.preventDefault();
              setModale((modale) => !modale);
            }}
            className='mobile-nav__list__li'
          >
            CONTACT
          </li>
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
}

export default MobileNav;
