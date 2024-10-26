"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().nonempty("Name cannot be empty"),
  email: z
    .string()
    .nonempty("Email cannot be empty")
    .email({ message: "Please enter a valid email" }),
  message: z.string().nonempty("Message cannot be empty"),
});

type ContactFormType = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    // Can make a server action.
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" h-full flex flex-col justify-evenly  gap-4 mid:w-[550px] p-3 xl:p-7 midLg:w-[700px] xl:w-[550px] xl:justify-center xl:gap-16 border-2 border-borderColor"
    >
      <div className="flex flex-col gap-2">
        <span className="font-medium">Name</span>
        <input
          type="text"
          className="bg-transparent border-2 border-borderColor p-2"
          {...register("name")}
          autoComplete="off"
        />
        {errors.name && (
          <span className="text-sm text-red-600">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Email</span>
        <input
          type="text"
          className="bg-transparent border-2 border-borderColor p-2"
          {...register("email")}
          autoComplete="off"
        />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Message</span>
        <textarea
          className="bg-transparent border-2 border-borderColor p-2"
          {...register("message")}
          autoComplete="off"
        />
        {errors.message && (
          <span className="text-sm text-red-600">{errors.message.message}</span>
        )}
      </div>

      <div className="mid:flex justify-center items-center">
        <button
          disabled={isSubmitting}
          className="bg-text text-background px-4 py-2 text-center w-full mid:w-[250px] "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
