"use client";

import { z } from "zod";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { GetLoginData } from "../../../../../_lib/serverActions";

const UserSchema = z.object({
  username: z.string().nonempty("Username cannot be empty!"),
  password: z
    .string()
    .nonempty("Password cannot be empty!")
    .min(4, { message: "Password must be atleast 8 characters" }),
});

export type FormDataType = z.infer<typeof UserSchema>;

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    // const result = GetLoginData(data);
    const { username, password } = data;

    await signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="font-medium">Username</span>
        <input
          {...register("username")}
          type="text"
          name="username"
          className="bg-transparent border-2 border-borderColor p-2"
          autoComplete="off"
        />
        {errors.username && (
          <span className="text-sm text-red-600">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Password</span>
        <input
          {...register("password")}
          type="text"
          name="password"
          className="bg-transparent border-2 border-borderColor  p-2"
          autoComplete="off"
        />
        {errors.password && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
      </div>
      <button type="submit" className="p-3 bg-text text-background font-medium">
        Signin
      </button>
    </form>
  );
};

export default Form;
