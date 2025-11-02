import { HeroSection } from '../components/home/HeroSection';
import { PopularSection } from '../components/home/PopularSection';

export const HomePage = ({ onNavigate }) => {
  return (
    <>
      <HeroSection onExplore={() => onNavigate('list')} />
      <PopularSection onNavigate={onNavigate} />
    </>
  );
};