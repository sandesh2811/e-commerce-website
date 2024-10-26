import { FaTrash } from "react-icons/fa";
import { useAppDispatch } from "../../../../store/store";
import {
  addItem,
  decreaseItemQuantity,
  removeItem,
} from "../../../../store/features/cartSlice";

const QuantityButtons = ({ item }: CartItemPropType) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl flex justify-start items-center gap-6">
        <button onClick={() => dispatch(decreaseItemQuantity(item.product.id))}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(addItem(item))}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeItem(item.product.id))}>
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuantityButtons;
