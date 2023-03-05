import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list__el'>
            <a href='/'>ACCUEIL</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>SERVICES</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>SECTORISATION</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>TARIFS</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>QUALITE</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>AVIS CLIENTS</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>MENTIONS LEGALES</a>
          </li>
          <li className='nav__list__el'>
            <a href='/'>CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
