import Hero from "./Hero";
import Collections from "./Collections";
import Features from "./Features";
import Steps from "./Steps";

const HomePage = () => {
  return (
    <main className="bg-light-cream min-h-svh">
      <Hero />
      <Collections />
      <Features />
      <Steps />
    </main>
  );
};

export default HomePage;
