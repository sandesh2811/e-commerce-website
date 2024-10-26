"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../../store/store";
import { getSelectedProduct } from "../../../store/features/selectedProduct";

const ImageComponent = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      href="/productDetails"
      onClick={() => dispatch(getSelectedProduct(product))}
    >
      <div className="relative w-[250px] h-[300px] mid:w-[290px] mid:h-[350px] lg:w-[300px] lg:h-[400px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          // placeholder="blur"
          // blurDataURL={product.blurredDataUrl}
        />
      </div>
    </Link>
  );
};

export default ImageComponent;
