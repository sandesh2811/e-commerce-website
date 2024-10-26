import ShippingDetails from "@/Components/Shipping/ShippingDetails/ShippingDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout page",
};

const Checkout = () => {
  return (
    <div className="p-4 min-h-[80vh] flex flex-col gap-6 xl:flex-row justify-evenly xl:gap-10">
      <section className="min-h-[80vh] midLg:flex justify-center">
        <ShippingDetails />
      </section>
    </div>
  );
};

export default Checkout;
