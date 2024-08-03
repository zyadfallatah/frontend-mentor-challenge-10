const Option = () => {
  return (
    <div>
      <input
        type="radio"
        name="type"
        id="test3"
        className="peer appearance-none hidden"
      />
      <label
        htmlFor="test3"
        className="block text-dark-grey-blue bg-light-gray hover:bg-pale-orange peer-checked:bg-dark-cyan peer-checked:text-light-cream p-6 rounded-lg"
      >
        <h2 className="text-2xl font-black">Capsule</h2>
        <p>Compatible with Nespresso systems and similar brewers</p>
      </label>
    </div>
  );
};

export default Option;
