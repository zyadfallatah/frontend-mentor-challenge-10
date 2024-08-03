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
    <div className="fixed w-full min-h-svh left-0 top-0 bg-black bg-opacity-40 px-6 py-9">
      <div>
        <h2 className="bg-dark-grey-blue px-6 py-7 text-[1.75rem] text-light-cream font-black">
          Order Summary
        </h2>
        <div className="bg-light-cream text-grey pt-10 px-6 text-2xl">
          <Summary plan={summary} />
          <p className="text-dark-grey-blue text-[.9375rem]">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <button
            className="fraunces bg-dark-cyan w-full text-light-cream text-lg font-black px-8 py-4 rounded-md mb-6"
            onClick={() => hideOrder(false)}
          >
            Checkout - $14.00 / mo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
