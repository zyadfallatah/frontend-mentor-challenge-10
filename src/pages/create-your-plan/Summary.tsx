import { Plan } from "./useOptions";

const handlePlanRender = (planName: string) => {
  return planName !== "" ? planName : "_____";
};

const Summary = ({ plan }: { plan: Plan }) => {
  return (
    <>
      <p className="fraunces text-2xl font-black !leading-[40px]">
        “I drink my coffee as{" "}
        <span className="text-dark-cyan">
          {handlePlanRender(plan.howToDrink)}
        </span>
        , with a{" "}
        <span className="text-dark-cyan">
          {handlePlanRender(plan.coffeeType)}
        </span>{" "}
        type of bean.{" "}
        <span className="text-dark-cyan">{handlePlanRender(plan.amount)}</span>{" "}
        {plan.howToDrink !== "Capsule" && (
          <>
            ground ala{" "}
            <span className="text-dark-cyan">
              {handlePlanRender(plan.grind)}
            </span>
            ,
          </>
        )}
        sent to me{" "}
        <span className="text-dark-cyan">
          {handlePlanRender(plan.interval)}
        </span>
        .”
      </p>
    </>
  );
};

export default Summary;
