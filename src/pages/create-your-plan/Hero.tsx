import moblieImage from "../../assets/plan/mobile/image-hero-blackcup.jpg"
import tabletImage from "../../assets/plan/tablet/image-hero-blackcup.jpg"
import desktopImage from "../../assets/plan/desktop/image-hero-blackcup.jpg"

const Hero = () => {
  return (
    <div className=" relative isolate text-light-cream text-center md:text-left px-6 md:px-14 pt-24 min-h-[400px] lg:min-h-[450px]">
      <img src={moblieImage} alt="hero image" className=" absolute md:hidden size-full top-0 left-0 rounded-[10px] -z-10" />
      <img src={tabletImage} alt="hero image" className=" absolute hidden md:block lg:hidden size-full top-0 left-0 rounded-[10px] -z-10" />
      <img src={desktopImage} alt="hero image" className=" absolute hidden lg:block size-full top-0 left-0 rounded-[10px] -z-10" />

      <div >
        <h1 className="text-[2.5rem] font-black mb-6 lg:text-7xl">Create a plan</h1>
        <p className="text-[15px] md:max-w-[395px]">Build a subscription plan that best fits your needs. We offer an assortment of the best 
        artisan coffees from around the globe delivered fresh to your door.</p>
      </div>
    </div>
  )
}

export default Hero