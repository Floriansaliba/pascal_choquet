import React from 'react';
import marques from '../../data/marques';

function Qualite({ qualitySection }) {
  return (
    <section className='quality' id='quality' ref={qualitySection}>
      <h2 className='section-title'>Qualité</h2>
      <p className='paragraphe'>
        En tant que serrurier professionnel, nous sommes fiers de notre
        engagement envers la qualité de nos services. <br />
        <br /> Nous offrons des devis gratuits pour tous nos travaux, afin que
        nos clients sachent exactement ce qu'ils paient avant de commencer le
        travail. <br />
        <br />
        Nous sommes également fiers de la qualité de nos produits, qui sont tous
        garantis pour assurer la satisfaction de nos clients.
        <br />
        <br /> Nous sommes conscients de l'importance des délais et nous nous
        engageons à respecter les échéances que nous avons fixées. <br />
        <br />
        Enfin, nous considérons qu'il est essentiel de fournir des informations
        claires et transparentes sur nos tarifs, afin que nos clients sachent
        exactement ce qu'ils paient et pourquoi. <br />
        <br />
        Chez nous, la satisfaction de nos clients est notre priorité absolue, et
        nous travaillons dur pour garantir un service de qualité à chaque fois.
      </p>
      <h3 className='section-subtitle'>Mes marques</h3>
      <ul className='quality__list'>
        {marques.map((marque) => {
          return <li key={marque}>{marque}</li>;
        })}
      </ul>
    </section>
  );
}

export default Qualite;
