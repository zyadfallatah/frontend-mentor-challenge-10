import Button from "../../components/Button";
import PlanOptions from "./PlansOption";
import Summary from "./Summary";
import { useOptions } from "./useOptions";

const Plan = () => {
  const [state, dispatch] = useOptions();

  return (
    <form className=" mt-[7.5rem]" onSubmit={() => console.log("Wow")}>
      <PlanOptions
        header="How do you drink your coffee?"
        plan="howToDrink"
        dispatcher={dispatch}
      >
        <PlanOptions.Option
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
        />
        <PlanOptions.Option
          title="Filter"
          description="For pour over or drip methods like Aeropress, Chemex, and V60"
        />
        <PlanOptions.Option
          title="Espresso"
          description="Dense and finely ground beans for an intense, flavorful experience"
        />
      </PlanOptions>

      <PlanOptions
        header="What type of coffee?"
        plan="coffeeType"
        dispatcher={dispatch}
      >
        <PlanOptions.Option
          title="Single Origin"
          description="Distinct, high quality coffee from a specific family-owned farm"
        />
        <PlanOptions.Option
          title="Decaf"
          description="Just like regular coffee, except the caffeine has been removed"
        />
        <PlanOptions.Option
          title="Blended"
          description="Combination of two or three dark roasted beans of organic coffees"
        />
      </PlanOptions>

      <PlanOptions
        header="How much would you like?"
        plan="amount"
        dispatcher={dispatch}
      >
        <PlanOptions.Option
          title="250g"
          description="Perfect for the solo drinker. Yields about 12 delicious cups."
        />
        <PlanOptions.Option
          title="500g"
          description="Perfect option for a couple. Yields about 40 delectable cups."
        />
        <PlanOptions.Option
          title="1000g"
          description="Perfect for offices and events. Yields about 90 delightful cups."
        />
      </PlanOptions>

      <PlanOptions
        header="Want us to grind them?"
        plan="grind"
        dispatcher={dispatch}
      >
        <PlanOptions.Option
          title="Wholebean"
          description="Best choice if you cherish the full sensory experience"
        />
        <PlanOptions.Option
          title="Filter"
          description="For drip or pour-over coffee methods such as V60 or Aeropress"
        />
        <PlanOptions.Option
          title="Cafetiére"
          description="Course ground beans specially suited for french press coffee"
        />
      </PlanOptions>

      <PlanOptions
        header="How often should we deliver?"
        plan="interval"
        dispatcher={dispatch}
      >
        <PlanOptions.Option
          title="Every week"
          description="$7.20 per shipment. Includes free first-class shipping."
        />
        <PlanOptions.Option
          title="Every 2 weeks"
          description="$9.60 per shipment. Includes free priority shipping."
        />
        <PlanOptions.Option
          title="Every month"
          description="$12.00 per shipment. Includes free priority shipping."
        />
      </PlanOptions>

      <Summary plan={state} />
      <Button />
    </form>
  );
};

export default Plan;
