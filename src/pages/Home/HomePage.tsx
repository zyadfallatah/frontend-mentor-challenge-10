import Hero from "./Hero";
import Collections from "./Collections";
import Features from "./Features";
import Steps from "../../components/Steps.tsx";
const HomePage = () => {
  return (
    <main className="bg-light-cream min-h-svh">
      <Hero />
      <Collections />
      <Features />
      <Steps>
        <Steps.Title />
        <Steps.CoreDesign />
        <Steps.Button />
      </Steps>
    </main>
  );
};

export default HomePage;
