import Option from "./Option";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";
import { useState } from "react";

const FormOptions = () => {
  const [isOptionOpened, setIsOptionOpened] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center gap-8 mb-8">
        <h3 className="text-grey text-2xl font-black basis">
          How do you drink your coffee?
        </h3>
        <img
          src={arrow}
          alt="arrow image"
          className={`${isOptionOpened && "rotate-180"}`}
          onClick={() => setIsOptionOpened(!isOptionOpened)}
        />
      </header>
      {isOptionOpened && <Option />}
    </div>
  );
};

export default FormOptions;
