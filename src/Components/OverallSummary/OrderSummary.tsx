"use client";
import Image from "next/image";

import { RootState, useAppSelector } from "../../../store/store";

const OrderSummary = () => {
  // Products
  const { cartItems } = useAppSelector((state: RootState) => state.cart);

  return (
    <div className="min-h-[40vh] flex flex-col gap-4 mid:w-[550px]">
      <h1 className="text-xl font-medium midLg:text-2xl">Order Summary</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div className="flex justify-center gap-4 " key={item.product.id}>
            {/* Image section */}
            <div className="relative w-[100px] h-[120px]">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="flex flex-col items-end flex-1 pr-2">
              <h3>{item.product.name}</h3>
              <span>Price: {item.product.price}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Size: {item.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
