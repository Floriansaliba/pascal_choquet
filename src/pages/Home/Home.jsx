import { Header } from '../../components/header/Header.jsx';
import ContactBar from '../../components/ContactBar/ContactBar';
import Carrousel from '../../components/Carrousel/Carrousel';
import Services from '../../components/Services/Services.jsx';

export const Home = () => {
  return (
    <section>
      <Header />
      <ContactBar />
      <Carrousel />
      <Services />
    </section>
  );
};
