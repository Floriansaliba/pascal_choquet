import React, { useState } from 'react';

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

  return (
    <section
      className='sectorisation'
      id='sectorisation'
      ref={sectorisationSection}
    >
      <h2 className='section-title'>Mon secteur d'intervention</h2>
      <p className='paragraphe'>
        "J'interviens sur la métropole de Rennes. Veuillez entrer votre code
        postal ci-dessous afin de vous assurer que vous vous trouvez bien dans
        ma zone d'intervention."
      </p>
      <br />

      <input
        className='input'
        onChange={handleChange}
        type='number'
        name='postal-code'
        placeholder='Votre code postal'
      />
      <br />
      {displayMessage(message)}

      <div className='sectorisation__imgFrame'>
        <img
          className='sectorisation__img'
          src={map}
          alt='Métropole de Rennes'
        />
      </div>
    </section>
  );
}

export default Sectorisation;
