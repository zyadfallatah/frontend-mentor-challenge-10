import Steps from "../../components/Steps";
import Hero from "./Hero";
import Plan from "./Plan";

const CreateYourPlanPage = () => {
  return (
    <div>
      <Hero />
      <Steps
        darkTheme
        className=" -translate-x-6 md:-translate-x-10 lg:-translate-x-0  w-[100vw] lg:w-full 
    px-6 md:px-10  py-20 xl:py-24 mt-[7.5rem]"
      >
        <Steps.CoreDesign darkTheme />
      </Steps>
      <Plan />
    </div>
  );
};

export default CreateYourPlanPage;
