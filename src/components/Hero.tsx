import hero from "@/assets/hero.png";

type HeroProps = {
  className?: string; // Add className as an optional prop
};

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <img src={hero} className="w-full max-h-[750px] object-cover" />
    </div>
  );
};

export default Hero;
