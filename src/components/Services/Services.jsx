import React from 'react';

function Services() {
  return (
    <section className='services'>
      <h2 className='section-title'>Mes services</h2>
      <p className='services__description'>
        "Spécialisé en serrurerie dans le dépannage et les interventions
        d'urgence auprès des particuliers et des professionnels, je suis à même
        de répondre au mieux à vos attentes dans les 30 minutes pour votre
        habitation, vos locaux professionnels, ou votre véhicule."
      </p>
      <h3 className='section-subtitle'>Mes prestations :</h3>
      <ul className='services__list'>
        <li className='services__list__el'>
          Ouverture de portes claquées ou verrouillées
        </li>
        <li className='services__list__el'>Dépannage de serrure de sécurité</li>
        <li className='services__list__el'>Mise en sécurité</li>
        <li className='services__list__el'>
          Remplacement de serrures toutes marques
        </li>
        <li className='services__list__el'>Ouverture de portes de voitures</li>
      </ul>
      <h3 className='section-subtitle'>Mes clients :</h3>
      <ul className='services__list'>
        <li className='services__list__el'>Particuliers</li>
        <li className='services__list__el'>Professionnels</li>
        <li className='services__list__el'>Collectivités</li>
        <li className='services__list__el'>Syndic de copropriété</li>
      </ul>
    </section>
  );
}

export default Services;
