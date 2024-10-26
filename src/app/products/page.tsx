// "use client";

import Product from "@/Components/Product/Product";
// import { useState } from "react";
import { products } from "../api/data.json";
import Filter from "@/Components/Filters/Filter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "All products from fashion website",
};

const Products = () => {
  // const [selectedValue, setSelectedValue] = useState<string>("");
  // const [sortedProducts, setSortedProducts] = useState(products);

  // const handleFilters = () => {
  //   const temp = products;
  //   if (selectedValue === "lowtohigh") {
  //     temp.sort((productA, productB) => productA.price - productB.price);
  //   } else if (selectedValue === "hightolow") {
  //     temp.sort((productA, productB) => productB.price - productA.price);
  //   } else if (selectedValue === "popularity") {
  //     temp.sort((productA, productB) => productA.rating - productB.rating);
  //   }
  //   setSortedProducts(temp);
  // };

  return (
    <div className="flex flex-col gap-4 px-4">
      {/* <Filter
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        handleFilters={handleFilters}
      /> */}
      {/* <div className="flex items-center flex-col gap-6 min-h-[100vh]  mid:grid mid:grid-cols-2 midLg:grid-cols-3 place-items-center xl:grid-cols-4 2xl:grid-cols-5"> */}
      <div className="flex items-center flex-col gap-2 mid:flex-row flex-wrap justify-center mid:gap-6 md:justify-evenly midLg:grid grid-cols-3 place-items-center place-content-center">
        <Product products={products} />
      </div>
    </div>
  );
};

export default Products;
