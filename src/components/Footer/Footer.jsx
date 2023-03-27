import React from 'react';

function Footer({ mentions, setMentions }) {
  return (
    <section className='footer'>
      <span>Copyright © 2023</span>
      <strong>Assistance Pascal Choquet</strong>
      <span>Rights Reserved.</span>
      <span
        onClick={() => {
          setMentions((mentions) => !mentions);
        }}
      >
        Mentions légales
      </span>
    </section>
  );
}

export default Footer;
