import { Hero } from './Hero';
import { About } from './About';
import { Challenges } from './Challenges';
import { Footer } from './Footer';
import { HomeCTA } from './HomeCTA';
import { Platform } from './Platform';
import { SecurityStandards } from './SecurityStandards';
import { UseCases } from './UseCases';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <Platform />
      <About />
      <UseCases />
      <SecurityStandards />
      <HomeCTA />
      <Footer />
    </>
  );
};
