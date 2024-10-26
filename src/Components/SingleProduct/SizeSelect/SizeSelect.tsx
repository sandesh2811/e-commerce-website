type SelectSizeProps = {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
};

const SizeSelect = ({ selectedSize, setSelectedSize }: SelectSizeProps) => {
  const setSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "None") {
      return;
    } else {
      setSelectedSize(e.target.value);
    }
  };

  return (
    <div className="flex flex-col  gap-3 py-2 text-lg">
      <span className="font-light">Size : </span>
      <select
        value={selectedSize}
        onChange={(e) => {
          setSize(e);
        }}
        name="size"
        className="text-background py-2 w-[290px] px-2"
      >
        <option value="None">None</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>
  );
};

export default SizeSelect;
