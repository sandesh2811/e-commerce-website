"use client";

import React from "react";
import CartItem from "./CartItem/CartItem";
import Summary from "./Summary/Summary";
import Link from "next/link";
import { RootState, useAppSelector } from "../../../store/store";

const CartPage = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);

  return (
    <>
      {cartItems.length !== 0 ? (
        <div className="px-4 py-6 min-h-[80vh] flex flex-col gap-6 midLg:grid grid-cols-2">
          <section className=" min-h-[30vh] flex flex-col gap-5 mid:items-center">
            <CartItem />
          </section>
          <section className="mid:flex justify-center">
            <Summary />
          </section>
        </div>
      ) : (
        <div className="p-4 min-h-[80vh] flex flex-col  items-center justify-center gap-3 tracking-wide">
          <h3 className="text-2xl">Your cart is empty!</h3>
          <Link href="/products">
            <button className=" bg-text text-background py-2 px-4 w-full mid:w-[212px]">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
