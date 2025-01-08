type FooterProps = {
  className?: string; // Add className as an optional prop
};

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={`bg-orange-500 py-10 ${className}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <span className="text-3xl text-white font-extrabold tracking-tight">
          FoodieBite.com
        </span>
        <div className="text-white font-bold tracking-tight flex gap-6">
          <a href="#" className="hover:underline" aria-label="Privacy Policy">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline" aria-label="Terms of Service">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
