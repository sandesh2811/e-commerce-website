import { products } from "../../app/api/data.json";
import { addBlurredDataUrl } from "../../../_lib/getBase64";
import ImageComponent from "./ImageComponent";

const Featured = async () => {
  const filteredProducts = products.filter((product) => {
    if (product.rating > 4.5) {
      addBlurredDataUrl(products);
      return product;
    }
  });

  return (
    <div className="min-h-[70vh] py-5 flex flex-col gap-6 tracking-wide">
      <h1 className="text-3xl font-semibold uppercase text-center midLg:text-6xl lg:text-start">
        Featured
      </h1>
      <div className="flex flex-col justify-between items-center gap-6 mid:flex-row flex-wrap mid:justify-center midLg:justify-start lg:justify-between">
        {filteredProducts.map((product, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <ImageComponent product={product} />
            <div className="w-[250px] mid:w-[290px] lg:w-[300px]">
              <div className="flex justify-between items-center mb-1 font-light">
                <h3>{product.name}</h3>
                <span>Rs {product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
