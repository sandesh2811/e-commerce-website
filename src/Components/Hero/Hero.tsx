import HeroText from "./HeroText/HeroText";
import HeroImages from "./HeroImages/HeroImages";

const Hero = () => {
  return (
    <main className="flex  flex-col  min-h-[90vh] tracking-wide gap-4 mid:gap-4 lg:grid grid-cols-2">
      {/* Text Section */}

      <HeroText />

      {/* Images Section */}

      <section className="min-h-[40vh]">
        <HeroImages />
      </section>
    </main>
  );
};

export default Hero;
