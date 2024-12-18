import Summary from "./Summary";
import { Plan } from "./useOptions";

const Order = ({
  summary,
  hideOrder,
}: {
  summary: Plan;
  hideOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed z-50 grid md:place-items-center w-full min-h-svh left-0 top-0 bg-black bg-opacity-40 px-6 py-9">
      <div className="md:max-w-[33.75rem]">
        <h2 className="bg-dark-grey-blue px-6 py-7 md:px-14 md:py-12 text-[1.75rem] rounded-t-lg md:text-[2.5rem] text-light-cream font-black">
          Order Summary
        </h2>
        <div className="bg-light-cream text-grey pt-10 pb-6 px-6 md:px-14 md:pt-14 text-2xl rounded-b-lg">
          <Summary plan={summary} />
          <p className="text-dark-grey-blue text-[.9375rem]">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div className="md:flex md:items-center my-6 md:mt-12 gap-3">
            <span className="hidden md:block md:flex-1 text-[2rem] text-dark-grey-blue font-black fraunces">
              $14.00 / mo
            </span>
            <button
              className="fraunces bg-dark-cyan w-full text-light-cream hover:bg-dark-cyan-transparent text-lg font-black px-8 py-4 rounded-md basis-52"
              onClick={() => hideOrder(false)}
            >
              Checkout <span className="inline md:hidden">- $14.00 / mo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
