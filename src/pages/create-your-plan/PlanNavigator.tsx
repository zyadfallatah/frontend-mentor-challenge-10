const Navigation = ({ number, title }: { number: number; title: string }) => {
  return (
    <div className="group flex items-center text-grey gap-7 font-black text-2xl py-6 pr-16">
      <p className="fraunces min-w-8 group-hover:text-dark-cyan">
        {"0" + number}
      </p>
      <h3 className="group-hover:text-dark-grey-blue">{title}</h3>
    </div>
  );
};

const PlanNavigator = () => {
  return (
    <div className="hidden sticky top-0 h-fit xl:block divide-y-[1px] divide-grey">
      <Navigation number={1} title="Preferences" />
      <Navigation number={2} title="Bean Type" />
      <Navigation number={3} title="Quantity" />
      <Navigation number={4} title="Grind Option" />
      <Navigation number={5} title="Deliveries" />
    </div>
  );
};

export default PlanNavigator;
