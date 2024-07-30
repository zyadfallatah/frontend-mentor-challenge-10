import mobileImage from "../../assets/about/mobile/image-quality.jpg";
import tabletImage from "../../assets/about/tablet/image-quality.jpg";
import desktopImage from "../../assets/about/desktop/image-quality.jpg";

const Quality = () => {
  return (
    <div
      className="relative mt-[7.5rem] md:mt-[9rem] xl:mt-[15rem] bg-dark-grey-blue
    px-6 md:px-[4.5rem] pt-[9rem] md:pt-[19rem] pb-14 rounded-[10px] xl:pt-20 xl:min-h-[474px]"
    >
      <img
        src={mobileImage}
        alt="quality image"
        className="absolute  max-h-[200px] left-[50%] translate-x-[-50%] px-6 top-[-78px] md:hidden"
      />
      <img
        src={tabletImage}
        alt="quality image"
        className="absolute hidden max-h-[320px] left-[50%] translate-x-[-50%] px-6 top-[-64px] md:block xl:hidden"
      />
      <img
        src={desktopImage}
        alt="quality image"
        className="absolute hidden max-h-[445px] right-[85px] top-[-88px] xl:block"
      />
      <div className="text-center text-light-cream  xl:text-left">
        <h2 className="text-[1.75rem] xl:text-[2.5rem] font-black mb-6 xl:mb-8">
          Uncompromising quality
        </h2>
        <p className="text-[15px] xl:max-w-[540px] xl:text-[1rem]">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </div>
  );
};

export default Quality;
