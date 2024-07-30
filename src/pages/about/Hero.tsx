import mobileHero from "../../assets/about/mobile/image-hero-whitecup.jpg";
import tabletHero from "../../assets/about/tablet/image-hero-whitecup.jpg";
import desktopHero from "../../assets/about/desktop/image-hero-whitecup.jpg";

const Hero = () => {
  return (
    <div className=" relative isolate min-h-[400px] lg:min-h-[450px]">
      <img
        src={mobileHero}
        alt="hero image"
        className=" absolute md:hidden -z-50 rounded-[.625rem] size-full"
      />
      <img
        src={tabletHero}
        alt="hero image"
        className=" absolute hidden md:block lg:hidden -z-50 rounded-[.625rem] mx-auto size-full"
      />
      <img
        src={desktopHero}
        alt="hero image"
        className=" absolute hidden lg:block -z-50 rounded-[.625rem] mx-auto size-full"
      />
      <div className="text-light-cream text-center px-6 lg:px-[5.25rem] pt-[7rem] lg:pt-[8.5rem] md:text-left">
        <h1 className="text-[1.75rem] lg:text-[2.5rem] font-black mb-6">
          About Us
        </h1>
        <p className="text-[15px] md:max-w-[25rem]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </div>
  );
};

export default Hero;
