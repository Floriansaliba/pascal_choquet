import React, { useContext, useLayoutEffect, useState } from 'react';
import { ModalContext } from '../../pages/Home/Home';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

function NavBar({
  servicesSection,
  tarifSection,
  sectorisationSection,
  qualitySection,
  avisSection,
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { modale, setModale } = useContext(ModalContext);
  console.log(modale);

  useLayoutEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();
    console.log('updated');
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [screenWidth, setScreenWidth]);

  if (screenWidth > 576) {
    return (
      <nav className='nav'>
        <ul className='nav__list'>
          <li
            className='nav__list__el'
            onClick={() => {
              window.scroll({ top: 400, behavior: 'smooth' });
            }}
          >
            SERVICES
          </li>
          <li
            className='nav__list__el'
            onClick={() => {
              window.scroll({ top: 1400, behavior: 'smooth' });
            }}
          >
            SECTORISATION
          </li>
          <li
            className='nav__list__el'
            onClick={() => {
              window.scroll({ top: 2500, behavior: 'smooth' });
            }}
          >
            TARIFS
          </li>
          <li
            className='nav__list__el'
            onClick={() => {
              window.scroll({ top: 3500, behavior: 'smooth' });
            }}
          >
            QUALITE
          </li>
          <li
            className='nav__list__el'
            onClick={() => {
              window.scroll({ top: 4700, behavior: 'smooth' });
            }}
          >
            AVIS CLIENTS
          </li>

          <li
            className='nav__list__el'
            onClick={(e) => {
              e.preventDefault();
              setModale((modale) => !modale);
            }}
          >
            CONTACT
          </li>
        </ul>
      </nav>
    );
  } else {
    return <BurgerMenu />;
  }
}

export default NavBar;
