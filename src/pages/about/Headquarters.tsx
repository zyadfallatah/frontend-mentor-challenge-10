import unitedKingdom from "../../assets/about/desktop/illustration-uk.svg";
import canada from "../../assets/about/desktop/illustration-canada.svg";
import australia from "../../assets/about/desktop/illustration-australia.svg";
import Headquarter from "./Headquarter";

const Headquarters = () => {
  return (
    <div className="mt-[7.5rem] xl:px-20">
      <h2 className="text-2xl text-center md:text-left text-grey font-black mb-[4.5rem]">
        Our headquarters
      </h2>
      <div className="flex flex-col md:flex-row md:items-center gap-20 md:gap-2 xl:gap-24">
        <Headquarter
          country="United Kingdom"
          image={unitedKingdom}
          address={`
        68  Asfordby Rd
        Alcaston
        SY6 1YA
        +44 1241 918425`}
        />
        <Headquarter
          country="Canada"
          image={canada}
          address={`
        1528  Eglinton Avenue
        Toronto
        Ontario M4P 1A6
        +1 416 485 2997`}
        />
        <Headquarter
          country="Australia"
          image={australia}
          address={`
        36 Swanston Street
        Kewell
        Victoria
        +61 4 9928 3629`}
        />
      </div>
    </div>
  );
};

export default Headquarters;
