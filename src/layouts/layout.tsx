import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner"; // Corrected import path

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
  title?: string; // New prop for dynamic title
  loading?: boolean; // New prop for loading state
  containerClassName?: string; // New prop for custom container class names
};

const Layout = ({
  children,
  showHero = false,
  title,
  loading = false,
  containerClassName = "",
}: Props) => {
  // Effect to update document title
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}

      <div className={`container mx-auto flex-1 py-10 ${containerClassName}`}>
        {loading ? <Spinner /> : children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
