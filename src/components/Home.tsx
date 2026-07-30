import { Hero } from './Hero';
import { About } from './About';
import { Challenges } from './Challenges';
import { Platform } from './Platform';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <About />
      <Platform />
      {/* Add more home sections here */}
    </>
  );
};
