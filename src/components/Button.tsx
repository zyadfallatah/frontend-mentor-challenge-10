import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="/create-your-plan"
      className={`block w-fit mx-auto md:mx-0 text-[18px] px-8 py-4 bg-dark-cyan hover:bg-dark-cyan-transparent rounded-[6px] 
      duration-300 font-black fraunces text-light-cream`}
    >
      Create your plan
    </Link>
  );
};

export default Button;
