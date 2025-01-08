import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import socialMediaImage from "../assets/socialMedia.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-16 bg-gray-50 min-h-screen py-12">
      <div className="md:px-32 bg-white rounded-xl shadow-lg py-10 px-8 flex flex-col gap-6 text-center mx-6">
        <h1 className="text-6xl font-bold tracking-tight text-orange-500 drop-shadow-sm">
          Every Bite Matters with FoodieBite
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Your favorite meals delivered fresh and fast! Explore a world of
          flavors with just a click.
        </p>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center px-8">
        <img
          src={landingImage}
          alt="Delicious Food on a Plate"
          className="rounded-xl shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h2 className="font-bold text-4xl tracking-tight text-gray-800">
            Order Takeaway Even Faster!
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Download the FoodieBite App for quick orders, personalized
            recommendations, and exclusive offers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src={appDownloadImage}
              alt="App Download Button"
              className="w-44 h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            />
            <img
              src={socialMediaImage}
              alt="Follow us on Social Media"
              className="w-44 h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
