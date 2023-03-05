import background from '../../../assets/images/background.jpg';
import pictureSlider1 from '../../../assets/images/slider1.jpg';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__frame'>
        <div className='hero__frame__phone'>07 66 75 57 44</div>
        <div className='hero__profil'>
          <img
            className='hero__profil__image'
            src={pictureSlider1}
            alt='Clef cassée'
          />
          <h2 className='hero__profil__text'>
            "Spécialisé en serrurerie dans le dépannage et les interventions
            d'urgence auprès des particuliers et des professionnels, je suis à
            même de répondre au mieux à vos attentes dans les 30 minutes pour
            votre habitation, vos locaux professionnels, ou votre véhicule."
          </h2>
        </div>
        <img
          className='hero__background'
          src={background}
          alt='cléfs posées sur une table'
        />
      </div>
    </section>
  );
};
