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

  if (mobileNav) {
    return (
      <nav className='mobile-nav'>
        <ul className='mobile-nav__list'>
          <li
            onClick={() => {
              window.scroll({ top: 250, behavior: 'smooth' });
            }}
            className='mobile-nav__list__li'
          >
            SERVICES
          </li>
          <li
            onClick={() => {
              window.scroll({ top: 1400, behavior: 'smooth' });
            }}
            className='mobile-nav__list__li'
          >
            SECTORISATION
          </li>
          <li
            onClick={() => {
              window.scroll({ top: 2300, behavior: 'smooth' });
            }}
            className='mobile-nav__list__li'
          >
            TARIFS
          </li>
          <li
            onClick={() => {
              window.scroll({ top: 3250, behavior: 'smooth' });
            }}
            className='mobile-nav__list__li'
          >
            QUALITE
          </li>
          <li
            onClick={() => {
              window.scroll({ top: 4700, behavior: 'smooth' });
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
