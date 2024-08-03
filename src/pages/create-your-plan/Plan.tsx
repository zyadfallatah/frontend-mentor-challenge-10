import FormOptions from "./FormOptions";

const Plan = () => {
  // Reducer Will Be here
  /*
    It should have: {
    header: string,
    options: {
      optionTitle: string,
      optionDesc: string
    }[]
    }
  */
  return (
    <form className="space-y-4">
      <h2>Plan</h2>
      <FormOptions />
    </form>
  );
};

export default Plan;
