import { addBlurredDataUrl } from "../../../_lib/getBase64";
import ImageComponent from "./Image/ImageComponent";

const Product = async ({ products }: ProductPropType) => {
  const blurDataUrl = await addBlurredDataUrl(products);

  return (
    <>
      {blurDataUrl.map((product: Product) => {
        return (
          <div
            key={product.id}
            className="flex flex-col gap-2 min-h-[450px] justify-center items-center "
          >
            <ImageComponent product={product} />
            <div className="w-full mid:w-[270px] md:w-[320px] midLg:w-[290px] lg:w-[315px] xl:w-[400px] tracking-wide  flex justify-between">
              <h2>{product.name}</h2>
              <span>Rs: {product.price}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
