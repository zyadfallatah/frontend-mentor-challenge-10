import Button from "../../components/Button";
import HorizontalLine from "../../components/HorizontalLine";
import Step from "./Step";

const Steps = () => {
  return (
    <div className="xl:px-[5rem]">
      <h2 className="font-black text-grey text-center md:text-left text-2xl mt-[7.5rem] mb-10">
        How it works
      </h2>
      <HorizontalLine />
      <div className="grid md:grid-cols-3 xl:place-items-start gap-14 xl:gap-[6rem] my-12  mx-auto">
        <Step
          stepNumber={1}
          title="Pick your coffee"
          description="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        />
        <Step
          stepNumber={2}
          title="Choose the frequency"
          description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <Step
          stepNumber={3}
          title="Receive and enjoy!"
          description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
        world-class coffees curated to provide a distinct tasting experience."
        />
      </div>
      <Button />
    </div>
  );
};

export default Steps;
