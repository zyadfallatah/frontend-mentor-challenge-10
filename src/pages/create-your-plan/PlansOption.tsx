import arrow from "../../assets/plan/desktop/icon-arrow.svg";
import { OptionsAction, Plan } from "./useOptions";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type PlanStates = {
  header: string;
  disabled?: boolean;
  active?: boolean;
};

type PlansOptionProps = {
  plan: keyof Plan;
  dispatcher?: React.Dispatch<OptionsAction>;
};

const OptionContext = createContext<PlansOptionProps>({
  plan: "howToDrink",
});

const useOptionsContext = () => {
  return useContext(OptionContext);
};

type PlansOptionType = PlansOptionProps & PlanStates & PropsWithChildren;

const PlansOption = ({
  header,
  plan,
  dispatcher,
  children,
  disabled = false,
  active = false,
}: PlansOptionType) => {
  const [isOptionOpened, setIsOptionOpened] = useState(active);

  const handleOptionOpening = function () {
    if (disabled) {
      setIsOptionOpened(false);
      return;
    }
    setIsOptionOpened(!isOptionOpened);
  };

  const isOptionOpenedAndNotDisabled = isOptionOpened && !disabled;

  return (
    <div className={`${isOptionOpenedAndNotDisabled ? "mb-24" : ""}`}>
      <header
        className="flex justify-between items-center gap-16 mb-8"
        onClick={() => handleOptionOpening()}
      >
        <h3
          className={`text-2xl font-black ${
            disabled ? "text-gray-400" : "text-grey"
          } `}
        >
          {header}
        </h3>
        <img
          src={arrow}
          alt="arrow image"
          className={`${isOptionOpenedAndNotDisabled ? "rotate-180" : ""}`}
        />
      </header>
      <main
        className={` grid gap-4 md:grid-cols-3 ${
          isOptionOpenedAndNotDisabled
            ? "block opacity-100"
            : "hidden opacity-0"
        } `}
      >
        <OptionContext.Provider value={{ plan, dispatcher }}>
          {children}
        </OptionContext.Provider>
      </main>
    </div>
  );
};

PlansOption.Option = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { plan, dispatcher } = useOptionsContext();
  const uniqueID = Math.round(Math.random() * 1000000 + Date.now());

  return (
    <div>
      <input
        type="radio"
        name={plan}
        id={`id-${uniqueID}`}
        className="peer appearance-none hidden"
      />
      <label
        htmlFor={`id-${uniqueID}`}
        className="block text-dark-grey-blue bg-light-gray hover:bg-pale-orange peer-checked:bg-dark-cyan peer-checked:text-light-cream p-6 rounded-lg
        md:min-h-[15.625rem]"
        onClick={() => dispatcher!({ type: `set_${plan}`, payload: title })}
      >
        <h2 className="text-2xl font-black md:mb-6">{title}</h2>
        <p>{description}</p>
      </label>
    </div>
  );
};

export default PlansOption;
