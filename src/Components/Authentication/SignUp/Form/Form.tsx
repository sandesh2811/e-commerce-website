"use client";

import GetFormData from "../../../../../_lib/serverActions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

// Sign up form user schema using zod
export const UserSchema = z.object({
  email: z
    .string()
    .nonempty("Email cannot be empty!")
    .email({ message: "Please enter a valid email." }),
  username: z.string().nonempty("Username cannot be empty!"),
  password: z
    .string()
    .nonempty("Password cannot be empty!")
    .min(8, { message: "Password must be atleast 8 characters" }),
});

export type FormDataType = z.infer<typeof UserSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    const result = GetFormData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="font-medium">Email</span>
        <input
          type="text"
          {...register("email")}
          className="bg-transparent border-2 border-borderColor p-2"
          autoComplete="off"
        />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Username</span>
        <input
          type="text"
          {...register("username")}
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
          type="text"
          {...register("password")}
          className="bg-transparent border-2 border-borderColor p-2"
          autoComplete="off"
        />
        {errors.password && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
      </div>
      <button type="submit" className="p-3 bg-text text-background font-medium">
        Signup
      </button>
    </form>
  );
};

export default Form;
