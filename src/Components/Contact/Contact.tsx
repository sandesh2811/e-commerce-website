import Link from "next/link";
import ContactForm from "./Form/ContactForm";
const ContactPage = () => {
  return (
    <div className="flex flex-col  p-4 tracking-wide xl:flex-row xl:justify-center min-h-[80vh] xl:gap-0">
      <div className="mid:flex justify-center">
        <div className="bg-borderColor text-text flex flex-col justify-evenly gap-4 p-3 xl:p-7 min-h-[50vh] mid:w-[550px]  midLg:w-[700px] xl:w-[550px] shadow-lg">
          <div>
            <h3 className="text-xl font-semibold">
              Have any queries? Feel free to reach out to us.
            </h3>
            <span>
              You can contact us through the given information below or by
              submitting the form.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span>
              <b>Address:</b> Kathmandu, Nepal
            </span>
            <span>
              <b>Phone Number:</b> 0123456789
            </span>
            <span>
              <b>Email:</b> abc@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-xl font-semibold">Connect with us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident consectetur voluptas.
              </p>
            </div>
            <div className="flex justify-between midLg:justify-center midLg:gap-8">
              <Link href="#">Facebook</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">Tiktok</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mid:flex justify-center items-center ">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
