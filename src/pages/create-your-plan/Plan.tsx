import FormOptions from "./PlansOption";
import { useOptions } from "./useOptions";

const Plan = () => {
  const [, dispatch] = useOptions();

  return (
    <form className=" mt-[7.5rem]">
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
        <FormOptions.Option
          title="Espresso"
          description="Dense and finely ground beans for an intense, flavorful experience"
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
        <FormOptions.Option
          title="Blended"
          description="Combination of two or three dark roasted beans of organic coffees"
        />
      </FormOptions>

      <FormOptions
        header="How much would you like?"
        plan="amount"
        dispatcher={dispatch}
      >
        <FormOptions.Option
          title="250g"
          description="Perfect for the solo drinker. Yields about 12 delicious cups."
        />
        <FormOptions.Option
          title="500g"
          description="Perfect option for a couple. Yields about 40 delectable cups."
        />
        <FormOptions.Option
          title="1000g"
          description="Perfect for offices and events. Yields about 90 delightful cups."
        />
      </FormOptions>

      <FormOptions
        header="Want us to grind them?"
        plan="grind"
        dispatcher={dispatch}
      >
        <FormOptions.Option
          title="Wholebean"
          description="Best choice if you cherish the full sensory experience"
        />
        <FormOptions.Option
          title="Filter"
          description="For drip or pour-over coffee methods such as V60 or Aeropress"
        />
        <FormOptions.Option
          title="Cafetiére"
          description="Course ground beans specially suited for french press coffee"
        />
      </FormOptions>

      <FormOptions
        header="How often should we deliver?"
        plan="interval"
        dispatcher={dispatch}
      >
        <FormOptions.Option
          title="Every week"
          description="$7.20 per shipment. Includes free first-class shipping."
        />
        <FormOptions.Option
          title="Every 2 weeks"
          description="$9.60 per shipment. Includes free priority shipping."
        />
        <FormOptions.Option
          title="Every month"
          description="$12.00 per shipment. Includes free priority shipping."
        />
      </FormOptions>
    </form>
  );
};

export default Plan;
