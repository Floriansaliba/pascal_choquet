import Aos from 'aos';
import React, { useEffect } from 'react';
import marques from '../../data/marques';

function Qualite({ qualitySection }) {
  //Utilisation d'AOS pour les effets au Scroll

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className='quality'
      id='quality'
      ref={qualitySection}
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <h2 className='section-title'>Qualité</h2>
      <p className='paragraphe'>
        En tant que <strong>serrurier professionnel</strong>, je suis fier de
        mon engagement envers la qualité de mes services.
        <br /> J'offre des <strong>devis gratuits</strong> pour tous mes
        travaux, afin que mes clients sachent exactement ce qu'ils vont payer
        avant le début des travaux.
        <br />
        Je suis également fier de la <strong>qualité</strong> de mes produits,
        qui sont tous garantis pour assurer la satisfaction de mes clients.
        <br /> Je suis conscient de l'importance des délais et je m'engage à
        respecter les échéances que j'ai fixées.
        <br />
        Enfin, je considère qu'il est essentiel de fournir des informations
        claires et transparentes sur mes tarifs, afin que mes clients sachent
        exactement ce qu'ils paient et pourquoi.
        <br />
        Chez moi, la <strong>satisfaction</strong> de mes clients est ma
        priorité absolue, et je travaille dur pour garantir un{' '}
        <strong>service de qualité</strong> à chaque fois.
      </p>
      <h3 className='section-subtitle'>Mes marques</h3>
      <ul className='quality__list'>
        {marques.map((marque) => {
          return (
            <li key={marque} data-aos='fade-up' data-aos-duration='500'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z' />
              </svg>
              {marque}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Qualite;
