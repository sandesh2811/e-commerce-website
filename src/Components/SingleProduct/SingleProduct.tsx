"use client";

import { useState } from "react";
import { RootState, useAppSelector } from "../../../store/store";

import Button from "@/Components/Button/Button";
import SizeSelect from "./SizeSelect/SizeSelect";
import ImageComponent from "./ImageSection/ImageComponent";

const SingleProduct = () => {
  const { product } = useAppSelector(
    (state: RootState) => state.selectedProduct
  );
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <div className="min-h-[70vh] px-4 flex justify-center items-center">
      <div className="flex flex-col mid:flex-row mid:items-center mid:gap-4 md:gap-8 xl:w-[70%]">
        {/* Image section */}

        <ImageComponent product={product} />

        {/* Description section */}

        <div className="min-h-[50vh] midLg:min-h-[60vh] flex flex-col gap-3 overflow-hidden py-3 mid:py-0">
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-2xl font-medium leading-6 md:text-4xl">
              {product.name}
            </h2>
            <span className="text-lg font-light midLg:text-xl">
              Price: {product.price}
            </span>
          </div>

          <div className="font-light text-[15px] midLg:text-lg flex flex-col gap-1">
            <span>Rating: {product.rating}</span>
            <p className="leading-[21px]">{product.description}</p>
          </div>
          <SizeSelect
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <Button product={product} size={selectedSize} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
