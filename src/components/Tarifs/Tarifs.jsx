import React from 'react';
import tarification from '../../data/tarification';

function Tarifs() {
  const prices = tarification.map((tarif) => {
    return (
      <tr className='tarifs__table__body__line' key={tarif.id}>
        <td className='tarifs__table__body__line__description'>
          {tarif.description}
        </td>
        <td className='tarifs__table__body__line__price'>{tarif.HT} €</td>
        <td className='tarifs__table__body__line__price'>{tarif.TTC10} €</td>
        <td className='tarifs__table__body__line__price'>{tarif.TTC20} €</td>
      </tr>
    );
  });

  return (
    <section className='tarifs'>
      <h2 className='section-title'>Tarifs</h2>
      <table className='tarifs__table'>
        <thead className='tarifs__table__head'>
          <tr className='tarifs__table__head__line'>
            <th className='tarifs__table__head__line__presta'>Prestations</th>
            <th>Prix HT</th>
            <th>Prix TTC 10%</th>
            <th>Prix TTC 20%</th>
          </tr>
        </thead>
        <tbody className='tarifs__table__body'>{prices}</tbody>
      </table>
    </section>
  );
}

export default Tarifs;
