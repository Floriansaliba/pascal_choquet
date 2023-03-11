import React from 'react';

const tarification = [
  {
    id: 0,
    description: 'Ouverture par crochetage ou perçage',
    HT: 85.66,
    TTC10: 92.44,
    TTC20: 102.79,
  },
  {
    id: 1,
    description: 'Ouverture sur verrou ou serrure de haute sureté',
    HT: 101.87,
    TTC10: 112.06,
    TTC20: 122.24,
  },
  {
    id: 2,
    description: 'Ouverture sur multi ouverture au-delà de 30 minutes',
    HT: 34.72,
    TTC10: 38.19,
    TTC20: 41.66,
  },
  {
    id: 3,
    description: 'Ouverture sur porte blindée fermée',
    HT: 173.64,
    TTC10: 191,
    TTC20: 208.36,
  },
  {
    id: 4,
    description: 'Ouverture voiture / utilitaire',
    HT: 100.0,
    TTC10: '',
    TTC20: 120.0,
  },
];

function Tarifs() {
  return (
    <section className='tarifs'>
      <h2 className='section-title'>Tarifs</h2>
      {tarification.map((tarif) => {
        return <h3 key={tarif.id}>{tarif.description}</h3>;
      })}
    </section>
  );
}

export default Tarifs;
