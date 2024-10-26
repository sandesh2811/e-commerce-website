"use client";

import Link from "next/link";
import { RootState, useAppSelector } from "../../../store/store";

const CustomerDetailsSummary = () => {
  const { userDetails } = useAppSelector(
    (state: RootState) => state.userShippingDetails
  );

  return (
    <div className="min-h-[40vh] flex flex-col gap-6 bg-text text-background p-4 z-30 midLg:h-[53vh] midLg:sticky top-10 xl:w-[500px] xl:justify-center-center mid:w-[550px]">
      <h1 className="text-xl font-medium midLg:text-2xl">Your Details</h1>
      {/* Customer Details */}
      <div className="flex flex-col gap-3 text-[15px]">
        <span>
          Name: {userDetails.firstName} {userDetails.lastName}
        </span>
        <span>City: {userDetails.city}</span>
        <span>Address: {userDetails.address}</span>
        <span>Phone: {userDetails.phoneNumber}</span>
        <span>Total: Rs 10000</span>
        <span>Payment Method: {userDetails.paymentMethod}</span>
      </div>

      <div className="h-[1px] w-full bg-background"></div>

      {/* CTA Buttons */}
      <div className="flex justify-between items-center">
        <Link href="/checkout">
          <span className="underline underline-offset-4 text-sm text-[#121212]/80 hover:text-background">
            Return
          </span>
        </Link>
        <button className="py-2 px-4 bg-background text-text text-sm">
          Confirm
        </button>
      </div>

      {/* Note */}
      <div>
        <span className="text-sm text-background">
          Note: Please check all the details carefully.Once proceeded it cannot
          be reverted.
        </span>
      </div>
    </div>
  );
};

export default CustomerDetailsSummary;
