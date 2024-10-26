import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type shippingDetailsType = {
  country: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  email?: string;
  phoneNumber: string;
  paymentMethod: string;
};

type shippingDetailsState = {
  userDetails: shippingDetailsType;
};

const initialState: shippingDetailsState = {
  userDetails: {
    country: "",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    email: undefined,
    phoneNumber: "",
    paymentMethod: "",
  },
};

export const ShippingDetailsSlice = createSlice({
  name: "Userdetails",
  initialState,
  reducers: {
    getUserShippingDetails: (
      state,
      action: PayloadAction<shippingDetailsType>
    ) => {
      const {
        firstName,
        lastName,
        city,
        country,
        email,
        phoneNumber,
        paymentMethod,
        address,
      } = action.payload;

      state.userDetails = {
        country,
        firstName,
        lastName,
        city,
        address,
        email,
        phoneNumber,
        paymentMethod,
      };
    },
  },
});

export const { getUserShippingDetails } = ShippingDetailsSlice.actions;

export default ShippingDetailsSlice;
