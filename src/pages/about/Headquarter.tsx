type Headquarter = {
  image: string;
  country: string;
  address: string;
};

const Headquarter = ({ image, country, address }: Headquarter) => {
  const getAddressArray = address.split("\n");

  return (
    <div
      className={`text-dark-grey-blue text-center md:text-left md:mx-auto xl:mx-0`}
    >
      <img src={image} alt="" className="mx-auto mb-12 md:mx-0" />
      <h3 className="text-[1.75rem] font-black mb-6 md:text-2xl xl:text-[2rem]">
        {country}
      </h3>
      <address className="min-w-[222px] xl:min-w-[285px]">
        {getAddressArray.map((addressData, index) => {
          return <p key={index}>{addressData}</p>;
        })}
      </address>
    </div>
  );
};

export default Headquarter;
