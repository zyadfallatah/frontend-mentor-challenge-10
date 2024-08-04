import { FormEvent, useState } from "react";
import PlanOptions from "./PlansOption";
import Summary from "./Summary";
import { useOptions } from "./useOptions";
import Order from "./Order";
import CreatePlanSubmit from "./CreatePlanSubmit";

const Plan = () => {
  const [state, dispatch] = useOptions();
  const [showOrder, setShowOrder] = useState(false);

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();

    setShowOrder(!showOrder);
  };

  return (
    <form className=" mt-[7.5rem]" onSubmit={handleSubmit}>
      {showOrder && <Order summary={state} hideOrder={setShowOrder} />}

      <PlanOptions
        header="How do you drink your coffee?"
        plan="howToDrink"
        dispatcher={dispatch}
        active
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
        disabled={state.howToDrink === "Capsule"}
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

      <div className="px-6 py-8 bg-dark-grey-blue rounded-lg">
        <h2 className="barlow text-grey text-[1rem] font-normal uppercase mb-2">
          Order Summary
        </h2>
        <div className="text-light-cream">
          <Summary plan={state} />
        </div>
      </div>

      <CreatePlanSubmit state={state} />
    </form>
  );
};

export default Plan;
