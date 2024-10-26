import Signup from "@/Components/Authentication/SignUp/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Sign up page",
};

const SignUp = () => {
  return <Signup />;
};

export default SignUp;
