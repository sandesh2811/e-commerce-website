import CustomerDetailsSummary from "@/Components/OverallSummary/CustomerDetailsSummary";
import OrderSummary from "@/Components/OverallSummary/OrderSummary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summary",
  description: "Overall summary for order and customer details",
};

const Summary = () => {
  return (
    <div className="min-h-[80vh] p-4 flex flex-col gap-6 tracking-wide midLg:grid grid-cols-2 relative">
      {/* Order Summary */}
      <div className="mid:flex justify-center">
        <OrderSummary />
      </div>

      {/* Customer Details Summary */}
      <div className="mid:flex justify-center">
        <CustomerDetailsSummary />
      </div>
    </div>
  );
};

export default Summary;
