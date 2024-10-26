import ContactPage from "@/Components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page inorder to contact fashion website",
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
