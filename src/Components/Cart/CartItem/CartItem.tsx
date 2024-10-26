import Image from "next/image";
import { RootState, useAppSelector } from "../../../../store/store";
import QuantityButtons from "../CTA_Buttons/QuantityButtons";

const CartItem = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);

  return (
    <>
      {cartItems.map((item) => {
        return (
          <div
            className="flex flex-col  items-center overflow-hidden tracking-wide gap-3 mid:w-[550px] midLg:w-[400px] lg:w-[490px] xl:w-[600px] mid:flex-row mid:h-[250px] mid:gap-5 2xl:w-full"
            key={item.product.id}
          >
            {/* Image section */}

            <div className="relative w-[200px] h-[200px] midLg:w-[150px] mid:h-full xl:w-[200px]">
              <Image
                fill
                src={item.product.image}
                alt={item.product.name}
                className="object-cover object-center"
              />
            </div>

            {/* Description & Controls Section */}

            <div className="flex flex-col h-full gap-4 flex-1">
              <div className="flex flex-col gap-1 mt-2 mid:mt-0">
                <h2 className="text-2xl font-medium">{item.product.name}</h2>
                <span className="text-lg font-light">
                  Price: Rs {item.product.price}
                </span>

                <span className="text-lg font-light">Size: {item.size}</span>
              </div>
              {/* CTA Buttons */}

              <QuantityButtons item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
