const HorizontalLine = () => {
  return (
    <div className=" hidden md:block relative md:w-[68%] md:h-[2px] bg-pale-orange">
      <span className="hidden md:block absolute size-8 rounded-full border-2 border-dark-cyan translate-y-[-50%] bg-light-cream"></span>
      <span className="hidden md:block absolute size-8 rounded-full border-2 border-dark-cyan translate-y-[-50%] bg-light-cream left-[50%] translate-x-[-50%]"></span>
      <span className="hidden md:block absolute size-8 rounded-full border-2 border-dark-cyan translate-y-[-50%] bg-light-cream right-0"></span>
    </div>
  );
};

export default HorizontalLine;
