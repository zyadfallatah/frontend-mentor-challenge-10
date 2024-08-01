const HorizontalLine = ({darkTheme = false}) => {
  const bgColor = darkTheme ? "bg-dark-grey-blue" : "bg-light-cream";
  return (
    <div className=" hidden md:block relative md:w-[68%] md:h-[2px] bg-pale-orange">
      <span className={`hidden md:block absolute size-8 rounded-full border-2 border-dark-cyan translate-y-[-50%] ${bgColor}`}></span>
      <span className={`hidden md:block absolute size-8 rounded-full border-2 border-dark-cyan translate-y-[-50%] ${bgColor} left-[50%] translate-x-[-50%]`}></span>
      <span className={`hidden md:block absolute size-8 rounded-full border-2 border-dark-cyan translate-y-[-50%] ${bgColor} right-0`}></span>
    </div>
  );
};

export default HorizontalLine;
