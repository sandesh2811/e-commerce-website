import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

type PayloadType = {
  product: Product;
  size: string;
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PayloadType>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({
          product: action.payload.product,
          quantity: 1,
          size: action.payload.size,
        });
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload
      );

      if (item) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== action.payload
        );
      }
    },

    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload
      );

      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product.id !== action.payload
          );
        }
      }
    },
  },
});

// Custom Selectors
// Item selector
const cartItems = (state: RootState) => state.cart.cartItems;

// Custom selector to calculate total amount (memoized)
export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) =>
      (total += curr.quantity * curr.product.price),
    0
  )
);

export const { addItem, removeItem, decreaseItemQuantity } = CartSlice.actions;
export default CartSlice;
