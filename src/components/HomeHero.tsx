import { Link } from "react-router-dom";
import mobileHero from "../assets/home/mobile/image-hero-coffeepress.jpg";
import tabletHero from "../assets/home/tablet/image-hero-coffeepress.jpg";
import desktopHero from "../assets/home/desktop/image-hero-coffeepress.jpg";

const HomeHero = () => {
  return (
    <div className="relative isolate min-h-[500px] lg:min-[600px]">
      <img
        src={mobileHero}
        alt="hero image"
        className=" absolute size-full rounded-[10px] -z-10 md:hidden"
      />
      <img
        src={tabletHero}
        alt="hero image"
        className="hidden absolute size-full rounded-[10px] -z-10 md:block lg:hidden"
      />
      <img
        src={desktopHero}
        alt="hero image"
        className="hidden absolute size-full rounded-[10px] -z-10 lg:block"
      />

      <div className="text-light-cream text-center md:text-left max-w-[279px] md:max-w-[398px] lg:max-w-[493px] mx-auto md:mx-0 md:ml-14">
        <h1 className="text-[40px] lg:text-7xl font-bold pt-[100px] mb-6">
          Great coffee made simple.
        </h1>
        <p className="text-[15px] mb-10">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link
          to="/create-your-plan"
          className="block w-fit mx-auto md:mx-0 text-[18px] px-8 py-4 bg-dark-cyan rounded-[6px] font-black fraunces"
        >
          Create your plan
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
