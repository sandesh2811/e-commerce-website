import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch image");
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
};

export const addBlurredDataUrl = async (products: Product[]) => {
  // Make all req at once instead of awaiting each one - avoiding waterfall
  const base64Promises = products.map((product) => getBase64(product.image));

  //   Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const imagesWithBlur = products.map((product, i) => {
    product.blurredDataUrl = base64Results[i];
    return product;
  });
  return imagesWithBlur;
};
