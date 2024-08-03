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
}: PlansOptionProps & PropsWithChildren & { header: string }) => {
  const [isOptionOpened, setIsOptionOpened] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center gap-8 mb-8">
        <h3 className="text-grey text-2xl font-black basis">{header}</h3>
        <img
          src={arrow}
          alt="arrow image"
          className={`${isOptionOpened ? "rotate-180" : ""}`}
          onClick={() => setIsOptionOpened(!isOptionOpened)}
        />
      </header>
      <OptionContext.Provider value={{ plan, dispatcher }}>
        {isOptionOpened && children}
      </OptionContext.Provider>
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
  return (
    <div className="mb-4">
      <input
        type="radio"
        name={plan}
        id={title}
        className="peer appearance-none hidden"
      />
      <label
        htmlFor={title}
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
