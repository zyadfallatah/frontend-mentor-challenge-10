import { Plan } from "./useOptions";

type NavigationType = {
  number: number;
  title: string;
  disabled?: boolean;
  active?: boolean;
};

const Navigation = ({ number, title, disabled, active }: NavigationType) => {
  return (
    <div
      className={`${
        disabled ? "text-gray-400" : "group text-grey"
      } flex items-center gap-7 font-black text-2xl py-6 pr-16`}
    >
      <p
        className={`fraunces min-w-8 group-hover:text-dark-cyan ${
          active ? "text-dark-cyan" : ""
        }`}
      >
        {"0" + number}
      </p>
      <h3
        className={`group-hover:text-dark-grey-blue ${
          active ? "text-dark-grey-blue" : ""
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

const PlanNavigator = ({ state }: { state: Plan }) => {
  const isStateChosen = (passedState: string) => {
    return passedState !== "";
  };

  return (
    <div className="hidden h-fit xl:block divide-y-[1px] divide-grey">
      <Navigation number={1} title="Preferences" active={true} />
      <Navigation
        number={2}
        title="Bean Type"
        active={isStateChosen(state.coffeeType)}
      />
      <Navigation
        number={3}
        title="Quantity"
        active={isStateChosen(state.amount)}
      />
      <Navigation
        number={4}
        title="Grind Option"
        disabled={state.howToDrink === "Capsule"}
      />
      <Navigation
        number={5}
        title="Deliveries"
        active={isStateChosen(state.interval)}
      />
    </div>
  );
};

export default PlanNavigator;
