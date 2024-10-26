"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../../store/store";
import { getSelectedProduct } from "../../../store/features/selectedProduct";

const ImageComponent = ({ newArrival }: NewArrivalProps) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      href="/productDetails"
      onClick={() => dispatch(getSelectedProduct(newArrival))}
    >
      <div className="relative w-[250px] h-[300px] mid:w-[290px] mid:h-[350px] lg:w-[314px] lg:h-[420px] xl:w-[400px] xl:h-[480px]">
        <Image
          fill
          src={newArrival.image}
          alt={newArrival.image}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={newArrival.blurredDataUrl}
        />
      </div>
    </Link>
  );
};

export default ImageComponent;
