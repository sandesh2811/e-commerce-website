import Image from "next/image";

const ImageComponent = ({ product }: { product: Product }) => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="relative w-[290px] h-[410px] md:w-[340px] md:h-[440px] midLg:w-[380px] midLg:h-[500px] xl:h-[550px] xl:w-[420px]">
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
