import arrow from "../../assets/plan/desktop/icon-arrow.svg";
import { OptionsAction, Plan } from "./useOptions";
import { createContext, PropsWithChildren, useContext, useState } from "react";

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

const PlansOption = ({
  header,
  plan,
  dispatcher,
  children,
  disabled = false,
  active = false,
}: PlansOptionProps &
  PropsWithChildren & {
    header: string;
    disabled?: boolean;
    active?: boolean;
  }) => {
  const [isOptionOpened, setIsOptionOpened] = useState(active);

  const handleOptionOpening = function () {
    if (disabled) {
      setIsOptionOpened(false);
      return;
    }
    setIsOptionOpened(!isOptionOpened);
  };
  return (
    <div className={`${isOptionOpened ? "mb-24" : ""}`}>
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
          className={`${isOptionOpened ? "rotate-180" : ""}`}
        />
      </header>
      <main
        className={`${
          isOptionOpened ? "block opacity-100" : "hidden opacity-0"
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
  const uniqueID = Math.random() * 1000000 + Date.now();

  return (
    <div className="mb-4">
      <input
        type="radio"
        name={plan}
        id={`${uniqueID}`}
        className="peer appearance-none hidden"
      />
      <label
        htmlFor={`${uniqueID}`}
        className="block text-dark-grey-blue bg-light-gray hover:bg-pale-orange peer-checked:bg-dark-cyan peer-checked:text-light-cream p-6 rounded-lg"
        onClick={() => dispatcher!({ type: `set_${plan}`, payload: title })}
      >
        <h2 className="text-2xl font-black">{title}</h2>
        <p>{description}</p>
      </label>
    </div>
  );
};

export default PlansOption;
