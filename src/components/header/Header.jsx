import { Logo } from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

export const Header = () => {
  return (
    <header className='header' id='header'>
      <Logo />
      <NavBar />
    </header>
  );
};
