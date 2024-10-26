import Form from "./Form/Form";

const ShippingDetails = () => {
  return (
    <div className="flex flex-col gap-5 tracking-wide midLg:items-center midLg:w-[800px] border-2 border-[#f3f4f9]/15 p-3 mid:p-8">
      <h1 className="text-2xl font-medium uppercase">Shipping Details</h1>
      <div className="flex flex-col gap-4">
        {/* User details */}
        <Form />
      </div>
    </div>
  );
};

export default ShippingDetails;
