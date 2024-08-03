import { Plan } from "./useOptions";

const handlePlanRender = (planName: string) => {
  return planName !== "" ? planName : ".....";
};

const Summary = ({ plan }: { plan: Plan }) => {
  return (
    <div className="px-6 py-8 bg-dark-grey-blue rounded-lg">
      <h2 className="barlow text-grey text-[1rem] font-normal uppercase mb-2">
        Order Summary
      </h2>
      <p className="fraunces text-light-cream text-2xl font-black">
        “I drink my coffee as{" "}
        <b className="text-dark-cyan">{handlePlanRender(plan.howToDrink)}</b>,
        with a{" "}
        <b className="text-dark-cyan">{handlePlanRender(plan.coffeeType)}</b>{" "}
        type of bean.
        <b className="text-dark-cyan">{handlePlanRender(plan.amount)}</b>ground
        ala <b className="text-dark-cyan">{handlePlanRender(plan.grind)}</b>,
        sent to me{" "}
        <b className="text-dark-cyan">{handlePlanRender(plan.interval)}</b>.”
      </p>
    </div>
  );
};

export default Summary;
