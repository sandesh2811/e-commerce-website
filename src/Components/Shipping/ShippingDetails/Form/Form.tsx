"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { GetShippingDetails } from "../../../../../_lib/serverActions";
import { useAppDispatch } from "../../../../../store/store";
import { getUserShippingDetails } from "../../../../../store/features/userDetails";
import { useRouter } from "next/navigation";

const Cities = [
  {
    name: "Butwal",
    value: "Butwal",
  },
  {
    name: "Kathmandu",
    value: "Kathmandu",
  },
  {
    name: "Bhaktapur",
    value: "Bhaktapur",
  },
  {
    name: "Lalitpur",
    value: "Lalitpur",
  },
  {
    name: "Pokhara",
    value: "Pokhara",
  },
  {
    name: "Chitwan",
    value: "Chitwan",
  },
  {
    name: "Nepalgunj",
    value: "Nepalgunj",
  },
  {
    name: "Biratnagar",
    value: "Biratnagar",
  },
  {
    name: "Dharan",
    value: "Dharan",
  },
];
const citiesEnum = [
  "Butwal",
  "Kathmandu",
  "Bhaktapur",
  "Lalitpur",
  "Pokhara",
  "Chitwan",
  "Biratnagar",
  "Dharan",
  "Nepalgunj",
] as const;

const PaymentMethods = [
  {
    name: "COD",
    value: "COD",
  },
  {
    name: "Esewa",
    value: "Esewa",
  },
  {
    name: "Khalti",
    value: "Khalti",
  },
  {
    name: "FonePay",
    value: "FonePay",
  },
];
const paymentMethodsEnum = ["COD", "Esewa", "Khalti", "FonePay"] as const;

const ShippingDetailsSchema = z.object({
  country: z.string().default("Nepal"),
  firstName: z.string().nonempty("Firstname cannot be empty!"),
  lastName: z.string().nonempty("Lastname cannot be empty!"),
  address: z.string().nonempty("Address cannot be empty!"),
  email: z.union([z.string().email("Invalid email"), z.literal("")]).optional(),
  phoneNumber: z
    .string()
    .nonempty("Phone number cannot be string or empty!")
    .min(10, { message: "Phone number must be of 10 digits" })
    .max(10, { message: "Phone number cannot exceed 10 digits" }),
  city: z.enum(citiesEnum, { message: "Please select a  city" }),
  paymentMethod: z.enum(paymentMethodsEnum, {
    message: "Please select a  payment method",
  }),
});

type ShippingDetailsType = z.infer<typeof ShippingDetailsSchema>;

const Form = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ShippingDetailsType>({
    resolver: zodResolver(ShippingDetailsSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ShippingDetailsType> = async (
    data: ShippingDetailsType
  ) => {
    const finalData = {
      country: data.country,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      city: data.city,
      paymentMethod: data.paymentMethod,
      ...(data.email ? { email: data.email } : {}),
      phoneNumber: data.phoneNumber,
    };

    // Server action
    const result = await GetShippingDetails(finalData);
    if (result) {
      dispatch(getUserShippingDetails(finalData));
      router.push("/summary");
    } else {
      throw new Error("Oops! Something went wrong!");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-evenly gap-4 midLg:w-[700px]"
    >
      <div className="flex flex-col gap-2">
        <span className="font-medium">Country/Region</span>
        <select
          name="country"
          className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
        >
          <option className="text-text bg-background" value="Nepal">
            Nepal
          </option>
        </select>
      </div>
      <div className="flex flex-col mid:grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <span className="font-medium">First Name</span>
          <input
            autoComplete="off"
            type="text"
            className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="text-sm text-red-600">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Last Name</span>
          <input
            autoComplete="off"
            type="text"
            className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-sm text-red-600">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-medium">City</span>
        <select
          {...register("city")}
          className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
        >
          <option className="text-text bg-background" value="None">
            None
          </option>
          {Cities.map((city) => {
            return (
              <option
                key={city.name}
                className="text-text bg-background"
                value={city.value}
              >
                {city.name}
              </option>
            );
          })}
        </select>
        {errors.city && (
          <span className="text-sm text-red-600">{errors.city.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Address</span>
        <input
          autoComplete="off"
          type="text"
          className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
          {...register("address")}
        />
        {errors.address && (
          <span className="text-sm text-red-600">{errors.address.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">
          Email
          <span className="text-sm text-[#f3f4f9]/70"> (optional)</span>
        </span>
        <input
          autoComplete="off"
          type="text"
          className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Phone</span>
        <input
          autoComplete="off"
          type="text"
          className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <span className="text-sm text-red-600">
            {errors.phoneNumber.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Payment Method</span>
        <select
          {...register("paymentMethod")}
          className="bg-transparent border-2 border-[#f3f4f9]/15 p-2"
        >
          <option className="text-text bg-background" value="None">
            None
          </option>
          {PaymentMethods.map((payment) => {
            return (
              <option
                key={payment.name}
                className="text-text bg-background"
                value={payment.value}
              >
                {payment.name}
              </option>
            );
          })}
        </select>
        {errors.paymentMethod && (
          <span className="text-sm text-red-600">
            {errors.paymentMethod.message}
          </span>
        )}
      </div>
      {/* CTA buttons */}
      <div className="flex justify-between items-center">
        <Link href="/cart">
          <button
            disabled={isSubmitting}
            className="py-3 text-sm mid:text-base underline underline-offset-4"
          >
            Return to cart
          </button>
        </Link>
        <button
          type="submit"
          className="py-2 px-4 bg-text text-background text-sm"
          disabled={isSubmitting}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default Form;
