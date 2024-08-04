import { Plan } from "./useOptions";

const CreatePlanSubmit = ({ state }: { state: Plan }) => {
  const handleValidation = function () {
    for (const plan in state) {
      if (state["howToDrink"] === "Capsule" && plan === "grind") continue;
      if (state[plan as keyof Plan] === "") {
        return true;
      }
    }
    return false;
  };

  const isDisabled = handleValidation();

  return (
    <input
      type="submit"
      value="Create my plan"
      className={`block w-fit ${
        isDisabled ? "bg-grey" : "bg-dark-cyan"
      } mt-14 mx-auto md:mx-0 text-[18px] px-8 py-4 rounded-[6px] font-black fraunces text-light-cream`}
      disabled={isDisabled}
    />
  );
};

export default CreatePlanSubmit;
