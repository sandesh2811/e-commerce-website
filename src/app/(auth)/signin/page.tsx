import Login from "@/Components/Authentication/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "Sign in page ",
};

const SignIn = () => {
  return <Login />;
};

export default SignIn;
