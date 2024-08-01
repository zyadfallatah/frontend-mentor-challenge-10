type StepType = {
  stepNumber: number;
  title: string;
  description: string;
};

const Step = ({ stepNumber, title, description }: StepType) => {
  return (
    <div className="text-center md:text-left space-y-6">
      <h3 className="text-[72px] font-black text-pale-orange">
        {"0" + stepNumber}
      </h3>
      <h2 className="text-[1.75rem] lg:text-[2rem] font-black md:max-w-[255px]">
        {title}
      </h2>
      <p className="text-[15px]">{description}</p>
    </div>
  );
};

export default Step;
