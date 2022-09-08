import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Infrastructure de paiement pour le commerce en ligne</h1>
          <p>
            Des millions d'entreprises de toutes tailles, des start-up aux
            grandes entreprises, utilisent le logiciel et les API de Stripe pour
            accepter des paiements, effectuer des virements et gérer leurs
            activités en ligne.
          </p>
          <button className='btn'>démarrer maintenant</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
