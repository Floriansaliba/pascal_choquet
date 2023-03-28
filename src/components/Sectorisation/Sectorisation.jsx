import Aos from 'aos';
import React, { useEffect, useState } from 'react';

import map from '../../assets/images/carte_metropole.jpg';
import villes from '../../data/villes.js';

function Sectorisation({ sectorisationSection }) {
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const postalCode = Number(value);

    if (value.length === 0) {
      setMessage(null);
    }

    if (value.length === 5) {
      const filteredCities = villes.filter((city) => {
        return city.cp.find((el) => el === postalCode) !== undefined;
      });

      if (filteredCities.length === 0) {
        setMessage("Je n'interviens pas dans cette zone");
      } else {
        setMessage(
          filteredCities[0].name + " se trouve bien dans ma zone d'intervention"
        );
      }
    }
    if (value.length > 5) {
      setMessage('Le code postal saisi est erroné');
    }
  };

  const displayMessage = (message) => {
    if (message === "Je n'interviens pas dans cette zone") {
      return <p className='paragraphe--unvalidation'>{message}</p>;
    } else if (message === 'Le code postal saisi est erroné') {
      return <p className='paragraphe--unvalidation'>{message}</p>;
    } else if (message === null) {
      return;
    } else {
      return <p className='paragraphe--validation'>{message}</p>;
    }
  };

  //Utilisation d'AOS pour les effets au Scroll

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className='sectorisation'
      id='sectorisation'
      ref={sectorisationSection}
      data-aos='fade-up'
      data-aos-duration='500'
    >
      <h2 className='section-title'>Mon secteur d'intervention</h2>
      <p className='paragraphe' data-aos='fade-up' data-aos-duration='500'>
        "J'interviens sur la métropole de <strong>Rennes</strong>. Veuillez
        entrer votre code postal ci-dessous afin de vous assurer que vous vous
        trouvez bien dans ma <strong>zone d'intervention</strong>."
      </p>
      <br />

      <input
        className='input'
        onChange={handleChange}
        type='number'
        name='postal-code'
        placeholder='Votre code postal'
        data-aos='zoom-in'
        data-aos-duration='500'
      />
      <br />
      {displayMessage(message)}

      <div className='sectorisation__imgFrame'>
        <img
          className='sectorisation__img'
          src={map}
          alt='Métropole de Rennes'
          data-aos='flip-right'
          data-aos-duration='1000'
        />
      </div>
    </section>
  );
}

export default Sectorisation;
