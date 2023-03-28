import Aos from 'aos';
import React, { useEffect } from 'react';

function Avis({ avisSection }) {
  //Utilisation d'AOS pour les effets au Scroll

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className='avis'
      id='avis'
      ref={avisSection}
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <h2 className='section-title'>Avis</h2>
      <p className='paragraphe'>
        Je suis fier de partager les <strong>avis positifs</strong> de mes
        clients.
        <br /> La <strong>satisfaction client</strong> est la priorité absolue
        de mon entreprise et je suis heureux de constater que mes clients sont
        satisfaits de mes services.
        <br /> Leurs commentaires sont une preuve de la qualité de mon travail
        et de mon engagement à fournir des{' '}
        <strong>services fiables et efficaces</strong>. <br />
        J'apprécie tous les retours que j'ai reçus, car ils me permettent
        d'améliorer constamment mes services pour répondre aux besoins de mes
        clients.
        <br /> Je m'engage à continuer à fournir un service de qualité
        exceptionnelle et à toujours chercher à dépasser les attentes de mes
        clients.
      </p>
      <div className='avis__frame' data-aos='fade-up' data-aos-duration='500'>
        <button className='avis__button'>
          <a
            className='avis__button__link'
            href='https://www.google.com/maps/place/Pascal+Choquet+Assistance/@48.1006369,-1.6663011,17z/data=!4m8!3m7!1s0x480edfb02d2868d3:0x9ce1382c5cc55096!8m2!3d48.1006369!4d-1.6641124!9m1!1b1!16s%2Fg%2F11c5j4gwj2'
          >
            Avis Google
          </a>
        </button>
        <button className='avis__button'>
          <a
            className='avis__button__link'
            href='https://www.pagesjaunes.fr/pros/55898135#ancreBlocAvis'
          >
            Avis Pages Jaunes
          </a>
        </button>
      </div>
    </section>
  );
}

export default Avis;
