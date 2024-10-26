import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectedProductState = {
  product: Product;
};

const initialState: SelectedProductState = {
  product: {
    id: 0,
    name: "",
    image: "",
    price: 0,
    description: "",
    rating: 0,
  },
};

export const SelectedProduct = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    getSelectedProduct: (state, action: PayloadAction<Product>) => {
      const { id, name, price, rating, description, image, blurredDataUrl } =
        action.payload;

      state.product = {
        id: id,
        name: name,
        image: image,
        price: price,
        description: description,
        rating: rating,
      };
    },
  },
});

export const { getSelectedProduct } = SelectedProduct.actions;
export default SelectedProduct;
