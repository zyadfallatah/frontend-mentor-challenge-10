import bean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";
import Feature from "./Feature";

const Features = () => {
  return (
    <div
      className=" relative bg-dark-grey-blue text-light-cream px-6 py-16 text-center rounded-[10px] mt-[7.5rem]
      h-[902px] md:max-h-[500px]"
    >
      <h2 className="text-[1.75rem] md:text-4xl xl:text-[2.5rem] font-black mb-6">
        Why choose us?
      </h2>
      <p className="text-[15px] mb-16 max-w-[540px] mx-auto">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>

      <div className="absolute left-0 px-6 w-full grid place-items-center xl:grid-cols-3 xl:gap-8">
        <Feature
          title="Best quality"
          description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
          image={bean}
        />
        <Feature
          title="Exclusive benefits"
          description="Special offers and swag when you subscribe, including 30% off your first shipment."
          image={gift}
        />
        <Feature
          title="Free shipping"
          description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
          image={truck}
        />
      </div>
    </div>
  );
};

export default Features;
