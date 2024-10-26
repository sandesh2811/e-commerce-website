import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import CartSlice from "./features/cartSlice";
import SelectedProduct from "./features/selectedProduct";
import ShippingDetailsSlice from "./features/userDetails";

// ___For redux persist___

// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   cart: CartSlice.reducer,
//   selectedProduct: SelectedProduct.reducer,
//   userShippingDetails: ShippingDetailsSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    cart: CartSlice.reducer,
    selectedProduct: SelectedProduct.reducer,
    userShippingDetails: ShippingDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
