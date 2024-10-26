import Form from "./Form/Form";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4">
      <div className="w-full min-h-[50vh] p-3 flex flex-col justify-evenly gap-3 border-2 border-borderColor tracking-wide mid:w-[550px] mid:p-8">
        {/* Headings */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold leading-5 mid:text-2xl">
            Sign into your account
          </h1>
          <span className="text-sm leading-5 text-secondaryTextColor">
            Enter your username and password to login to you account
          </span>
        </div>

        {/* Signin form */}
        <Form />

        {/* Sign up redirect */}
        <div className="flex gap-1 items-center justify-center text-secondaryTextColor">
          <span className="text-sm">Don't have an account?</span>
          <Link href="/signup">
            <span className="text-sm underline underline-offset-2 hover:text-text">
              Sign up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
