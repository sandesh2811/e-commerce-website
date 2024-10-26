type CredentialsType = {
  userName: string;
  password: string;
  email?: string;
  role: string;
};

type SignUpCredinentalsType = {
  users: CredentialsType[];
};

// Sign up form data helper functions
let signUpCredinentals: SignUpCredinentalsType = {
  users: [
    {
      userName: "admin123",
      password: "iamadmin",
      role: "admin",
    },
  ],
};

export const getUserDetails = () => signUpCredinentals;

export const postUserDetails = (user: any) =>
  signUpCredinentals.users.push(user);

// Customer order data helper functions

let shippingDetails = {};

export const getShippingDetails = () => shippingDetails;

export const postShippingDetails = (order: any) => (shippingDetails = order);
