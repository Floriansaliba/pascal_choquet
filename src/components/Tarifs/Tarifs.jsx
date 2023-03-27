import Aos from 'aos';
import React, { useEffect } from 'react';
import tarification from '../../data/tarification';

function Tarifs({ tarifSection }) {
  const prices = tarification.map((tarif) => {
    return (
      <tr
        className='tarifs__table__body__line'
        key={tarif.id}
        data-aos='zoom-in'
        data-aos-duration='300'
      >
        <td className='tarifs__table__body__line__description'>
          {tarif.description}
        </td>
        <td className='tarifs__table__body__line__price'>{tarif.HT} </td>
        <td className='tarifs__table__body__line__price'>{tarif.TTC10} </td>
        <td className='tarifs__table__body__line__price'>{tarif.TTC20} </td>
      </tr>
    );
  });

  //Utilisation d'AOS pour les effets au Scroll

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className='tarifs'
      id='tarifs'
      ref={tarifSection}
      data-aos='fade-up'
      data-aos-duration='300'
    >
      <h2 className='section-title'>Tarifs</h2>
      <table className='tarifs__table'>
        <thead className='tarifs__table__head'>
          <tr className='tarifs__table__head__line'>
            <th className='tarifs__table__head__line__presta'>Prestations</th>
            <th>Prix HT (€)</th>
            <th>Prix TTC 10% (€)</th>
            <th>Prix TTC 20% (€)</th>
          </tr>
        </thead>
        <tbody className='tarifs__table__body'>{prices}</tbody>
      </table>
    </section>
  );
}

export default Tarifs;
