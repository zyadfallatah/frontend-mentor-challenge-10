import FormOptions from "./PlansOption";
import { useOptions } from "./useOptions";

const Plan = () => {
  const [, dispatch] = useOptions();

  return (
    <form className="space-y-4 mt-[7.5rem]">
      <FormOptions
        header="How do you drink your coffee?"
        plan="howToDrink"
        dispatcher={dispatch}
      >
        <FormOptions.Option
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <FormOptions.Option
          title="Filter"
          description="For pour over or drip methods like Aeropress, Chemex, and V60"
        />
      </FormOptions>

      <FormOptions
        header="What type of coffee?"
        plan="coffeeType"
        dispatcher={dispatch}
      >
        <FormOptions.Option
          title="Single Origin"
          description="Distinct, high quality coffee from a specific family-owned farm"
        />
        <FormOptions.Option
          title="Decaf"
          description="Just like regular coffee, except the caffeine has been removed"
        />
      </FormOptions>
    </form>
  );
};

export default Plan;
