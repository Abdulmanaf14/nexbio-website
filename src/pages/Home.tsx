import { Hero } from '../components/Hero';
import { Challenges } from '../components/Challenges';
import { Platform } from '../components/Platform';
import { About } from '../components/About';
import { UseCases } from '../components/UseCases';
import { SecurityStandards } from '../components/SecurityStandards';
import { HomeCTA } from '../components/HomeCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <Platform />
      <About />
      <UseCases />
      <SecurityStandards />
      <HomeCTA />
    </>
  );
};
