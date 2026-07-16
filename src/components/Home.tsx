import { Hero } from './Hero';
import { About } from './About';
import { Challenges } from './Challenges';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <About />
      {/* Add more home sections here */}
    </>
  );
};
