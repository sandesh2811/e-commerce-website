import AboutPage from "@/Components/About/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Fashion Website Created Using Nextjs",
};

const About = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;
