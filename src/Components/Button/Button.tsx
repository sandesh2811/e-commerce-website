"use client";

import React from "react";
import { useAppDispatch } from "../../../store/store";
import { addItem } from "../../../store/features/cartSlice";

type PropsType = {
  product: Product;
  size: string;
};

const Button = ({ product, size }: PropsType) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-[290px] justify-center text-background">
      <button
        onClick={() => dispatch(addItem({ product, size }))}
        className={
          size
            ? `w-full bg-text py-2 px-3 
      font-medium`
            : `w-full bg-text py-2 px-3 
      font-medium cursor-not-allowed`
        }
        disabled={size === "" ? true : false}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Button;
