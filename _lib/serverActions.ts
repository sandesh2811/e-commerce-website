"use server";

import { FormDataType } from "@/Components/Authentication/SignUp/Form/Form";

// Sign up form server action
const GetFormData = async (formData: FormDataType) => {
  const { email, username, password } = formData;

  const userDetailsObject = {
    email: email,
    userName: username,
    password: password,
  };

  const sendUserData = await fetch("http://localhost:3000/api/signupform", {
    method: "POST",
    body: JSON.stringify(userDetailsObject),
  });
};

export default GetFormData;

// export const GetLoginData = async (formData: any) => {
//   const { username, password } = formData;

//   const userDetailsObject = {
//     userName: username,
//     password: password,
//   };

//   const sendUserData = await fetch("http://localhost:3000/api/signupform", {
//     method: "POST",
//     body: JSON.stringify(userDetailsObject),
//   });
// };

export const GetShippingDetails = async (shippingDetails: any) => {
  const sendUserData = await fetch("http://localhost:3000/api/order", {
    method: "POST",
    body: JSON.stringify(shippingDetails),
  });
  return sendUserData.ok;
};
