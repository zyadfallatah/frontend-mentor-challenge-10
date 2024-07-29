type FeatureProps = {
  title: string;
  description: string;
  image: string;
};

const Feature = ({ title, description, image }: FeatureProps) => {
  return (
    <div
      className="w-full bg-dark-cyan px-3 md:px-12 py-12 max-md:pt-[4.5rem] rounded-lg flex flex-col justify-center items-center 
    md:flex-row md:justify-start xl:flex-col gap-14 xl:min-h-[382px] xl:justify-center"
    >
      <img
        src={image}
        alt="Feature image"
        className="mx-auto md:mx-0 md:min-w-14"
      />
      <div className="text-center md:text-left xl:text-center">
        <h3 className="text-2xl font-black mb-6">{title}</h3>
        <p className="text-[15px] px-5 md:px-0">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
