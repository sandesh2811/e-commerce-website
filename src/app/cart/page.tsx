import CartPage from "@/Components/Cart/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart page which contains the selected items",
};

const Cart = () => {
  return (
    <>
      <CartPage />
    </>
  );
};

export default Cart;
