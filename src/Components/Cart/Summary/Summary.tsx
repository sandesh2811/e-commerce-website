import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../../../store/store";
import { GoX } from "react-icons/go";
import { totalPriceSelector } from "../../../../store/features/cartSlice";

const Summary = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);
  // const totalAmount = useAppSelector((state: RootState) =>
  //   state.cart.cartItems.reduce((acc, curr) => {
  //     return (acc += curr.product.price * curr.quantity);
  //   }, 0)
  // );
  const totalAmount = useAppSelector(totalPriceSelector);

  const [hasDiscount, setHasDiscount] = useState<boolean>(false);
  const [discountCode, setDiscountCode] = useState<string>("");
  const discountCodeArr: string[] = [];

  const checkDiscountCode = () => {
    if (discountCode !== "" || discountCode !== null) {
      discountCodeArr.push(discountCode);
      setHasDiscount(true);
    } else {
      setHasDiscount(false);
    }
  };

  return (
    <>
      <div className="min-h-[40vh] flex flex-col gap-6 bg-text text-background p-4 z-30 midLg:h-[53vh] midLg:sticky top-10 xl:w-[500px] xl:justify-center-center mid:w-[550px]">
        {/*  Cart items section */}
        {cartItems.map((item) => {
          return (
            <div
              key={item.product.id}
              className="flex flex-col justify-center gap-3"
            >
              <div className="flex justify-between text-sm mid:text-base">
                <div className="flex justify-center items-center gap-2">
                  <h2>{item.product.name} </h2>
                  <GoX size={18} />
                  <span>{item.quantity}</span>
                </div>
                <span>Rs {item.product.price}</span>
              </div>
            </div>
          );
        })}
        {/* Line section */}

        <div className="w-full h-[1px] bg-background"></div>

        {/* Total Amount section */}

        <div className="flex justify-between font-medium">
          <span>Total</span>

          <span>Rs {totalAmount} </span>
        </div>
        {/* CTA Button & Input */}
        <div className="flex flex-col gap-4 mid:w-full ">
          <div className="flex flex-col items-end gap-2 text-sm">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Discount Code"
              className="px-2 py-1 border-2 border-[#1f1f1f]/50 "
            />
            <button
              className=" bg-background text-text py-2 px-4 w-[190px]"
              onClick={() => {
                checkDiscountCode();
              }}
            >
              Apply
            </button>
          </div>
          {hasDiscount && (
            <div className="flex justify-end gap-2 items-center">
              {discountCodeArr.map((code, idx) => {
                return (
                  <span
                    key={idx}
                    className="p-2 text-xs bg-background text-text "
                  >
                    {code}
                  </span>
                );
              })}

              {/* <span className="bg-background text-text p-2 text-xs">
                Discount Code
              </span>
              <span className="bg-background text-text p-2 text-xs">
                Discount Code
              </span> */}
            </div>
          )}
        </div>

        {/* Checkout button section */}

        <div className="bg-background text-text h-[40px]">
          <Link href="/checkout">
            <button className="w-full h-full ">Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Summary;
