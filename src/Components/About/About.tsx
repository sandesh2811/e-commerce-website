import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

const AboutPage = () => {
  return (
    <div className="min-h-[65vh] p-6 overflow-hidden flex flex-col gap-4 midLg:gap-10">
      {/* Heading Section */}
      <h1 className="text-center text-2xl font-medium mid:text-3xl">
        About Fashion Website
      </h1>
      {/* Description Section */}
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default AboutPage;
