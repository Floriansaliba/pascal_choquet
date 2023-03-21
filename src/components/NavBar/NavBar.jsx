import React, { useContext, useLayoutEffect, useState } from 'react';
import { ModalContext } from '../../pages/Home/Home';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

function NavBar() {
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
          <li className='nav__list__el'>
            <a href='#header'>ACCUEIL</a>
          </li>
          <li className='nav__list__el'>
            <a href='#services'>SERVICES</a>
          </li>
          <li className='nav__list__el'>
            <a href='#sectorisation'>SECTORISATION</a>
          </li>
          <li className='nav__list__el'>
            <a href='#tarifs'>TARIFS</a>
          </li>
          <li className='nav__list__el'>
            <a href='#quality'>QUALITE</a>
          </li>
          <li className='nav__list__el'>
            <a href='#avis'>AVIS CLIENTS</a>
          </li>

          <li className='nav__list__el'>
            <a
              onClick={(e) => {
                e.preventDefault();
                setModale((modale) => !modale);
              }}
              href='/'
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return <BurgerMenu />;
  }
}

export default NavBar;
