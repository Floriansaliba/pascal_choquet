import openCar from '../../assets/images/ouverture_porte.png';
import lostKeys from '../../assets/images/background.jpg';
import doorOpened from '../../assets/images/door_opened.jpeg';
import ouvertureVoiture from '../../assets/images/ouverture_voiture.jpg';

import React, { useState } from 'react';

function Carrousel() {
  const [counter, setCounter] = useState(0);

  const pictures = [
    {
      id: 0,
      image: openCar,
      alt: "Ouverture d'une voiture",
      text: 'Clefs de véhicule perdues ?',
    },
    { id: 1, image: lostKeys, alt: 'Clefs perdues', text: 'Clefs perdues ?' },

    {
      id: 2,
      image: doorOpened,
      alt: 'Ouverture de porte',
      text: "Clef cassée à l'intérieur de la serrure ?",
    },
    {
      id: 3,
      image: ouvertureVoiture,
      alt: 'Ouverture de porte de voiture',
      text: "J'interviens dans les 30 minutes",
    },
  ];

  const increaseCounter = () => {
    if (counter < pictures.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(pictures.length - 1);
    }
  };

  return (
    <section className='carrousel'>
      <img
        className='carrousel__img'
        src={pictures[counter].image}
        alt={pictures[counter].alt}
      />
      <p className='carrousel__text'>{pictures[counter].text}</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
        className='carrousel__left-arrow'
        onClick={decreaseCounter}
      >
        <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
      </svg>
      <svg
        className='carrousel__right-arrow'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
        onClick={increaseCounter}
      >
        <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
      </svg>
      <div className='carrousel__radio-buttons'>
        {pictures.map((picture) => {
          if (counter === picture.id) {
            return (
              <svg
                className='carrousel__radio-buttons__svg'
                key={picture.id}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z' />
              </svg>
            );
          } else {
            return (
              <svg
                className='carrousel__radio-buttons__svg'
                key={picture.id}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
              </svg>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Carrousel;
