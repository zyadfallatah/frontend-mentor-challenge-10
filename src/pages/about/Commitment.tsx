import mobileImage from "../../assets/about/mobile/image-commitment.jpg";
import tabletImage from "../../assets/about/tablet/image-commitment.jpg";
import desktopImage from "../../assets/about/desktop/image-commitment.jpg";

const Commitment = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[7.5rem] gap-12 xl:px-20 xl:items-center xl:gap-[7.75rem]">
      <img
        src={mobileImage}
        alt="Commitment Image"
        className="rounded-lg md:hidden size-full max-h-[400px]"
      />
      <img
        src={tabletImage}
        alt="Commitment Image"
        className="hidden rounded-lg md:block lg:hidden"
      />
      <img
        src={desktopImage}
        alt="Commitment Image"
        className="hidden rounded-lg lg:block"
      />
      <div className="text-center text-dark-grey-blue md:text-left">
        <h2 className="text-[2rem] font-bold mb-[1.875rem]">Our commitment</h2>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
};

export default Commitment;
