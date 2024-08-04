import Collection from "./Collection";

import piccollo from "../../assets/home/desktop/image-piccollo.png";
import granEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import danche from "../../assets/home/desktop/image-danche.png";

const Collections = () => {
  return (
    <div className="relative mt-[7.5rem] md:mt-[12.75rem] isolate">
      <h2
        className=" md:absolute md:-z-10 text-transparent bg-gradient-to-b from-grey to-light-cream bg-clip-text 
      text-[2.5rem] md:min-w-[700px] xl:min-w-[1024px] md:text-[110px] xl:text-[150px] text-center font-black py-4 left-[50%] md:translate-x-[-50%] top-[-5rem]"
      >
        our collection
      </h2>
      <div className="space-y-12 md:space-y-0 xl:grid grid-cols-4 place-items-center gap-[1.88rem]">
        <Collection
          title="Gran Espresoo"
          image={granEspresso}
          description="Light and flavorful blend with cocoa and black pepper for an intense experience"
        />
        <Collection
          title="Planalto"
          image={planalto}
          description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        />
        <Collection
          title="Piccollo "
          image={piccollo}
          description="Mild and smooth blend featuring notes of toasted almond and dried cherry"
        />
        <Collection
          title="Danche"
          image={danche}
          description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        />
      </div>
    </div>
  );
};

export default Collections;
