import { useLayoutEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

export const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <NavBar />
    </header>
  );
};
