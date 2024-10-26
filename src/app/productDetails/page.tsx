import SingleProduct from "@/Components/SingleProduct/SingleProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "Details for the selected product",
};

const ProductDetails = () => {
  return (
    <>
      <SingleProduct />
    </>
  );
};

export default ProductDetails;
