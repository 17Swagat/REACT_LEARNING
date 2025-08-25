import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import WorkflowSection  from "./components/WorkflowSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <FeatureSection/>
      <WorkflowSection/>
    </>
  );
}
