const filterTitle = (image: string) => {
  const title = image.slice(image.indexOf("image-") + 6, image.indexOf("."));
  return title.split("-").join(" ");
};

const Collection = ({
  image,
  description,
}: {
  image: string;
  description: string;
}) => {
  const title = filterTitle(image);
  return (
    <div className="text-center md:flex justify-center gap-8 md:px-[5rem] xl:px-0 xl:flex-col">
      <img
        src={image}
        alt={`${image} image`}
        className="h-[151px] md:h-[193px] mx-auto my-3 "
      />
      <div className="md:text-left flex-1 xl:text-center">
        <h3 className="text-dark-grey-blue font-black text-2xl capitalize mt-6 mb-4 md:my-6">
          {title}
        </h3>
        <p className="text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default Collection;
