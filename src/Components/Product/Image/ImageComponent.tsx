"use client";

import Image from "next/image";
import Link from "next/link";

import { useAppDispatch } from "../../../../store/store";
import { getSelectedProduct } from "../../../../store/features/selectedProduct";

type Props = {
  product: Product;
};

const ImageComponent = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      href="/productDetails"
      onClick={() => dispatch(getSelectedProduct(product))}
    >
      <div
        className="relative w-[290px] h-[410px] 
      mid:w-[270px] mid:h-[380px] md:w-[320px] md:h-[420px] midLg:w-[290px] midLg:h-[450px] lg:w-[315px] xl:h-[500px] xl:w-[400px]"
      >
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="object-cover"
          placeholder="blur"
          blurDataURL={product.blurredDataUrl}
        />
      </div>
    </Link>
  );
};

export default ImageComponent;
