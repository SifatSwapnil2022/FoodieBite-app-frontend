import { useState, useEffect } from "react";
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import socialMediaImage from "../assets/socialMedia.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // State for Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col gap-16 min-h-screen py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-all ease-in-out duration-300"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <div
        className={`md:px-32 bg-white rounded-xl shadow-lg py-10 px-8 flex flex-col gap-6 text-center mx-6 ${
          isDarkMode ? "bg-gray-800 text-white" : ""
        }`}
      >
        <h1
          className={`text-6xl font-bold tracking-tight ${
            isDarkMode ? "text-orange-500" : "text-orange-500"
          } drop-shadow-sm`}
        >
          Every Bite Matters with FoodieBite
        </h1>
        <p
          className={`text-lg text-gray-700 leading-relaxed ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Your favorite meals delivered fresh and fast! Explore a world of
          flavors with just a click.
        </p>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center px-8">
        <img
          src={landingImage}
          alt="Delicious Food on a Plate"
          className="rounded-xl shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h2
            className={`font-bold text-4xl tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Order Takeaway Even Faster!
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-white" : "text-gray-600"
            } leading-relaxed`}
          >
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

      {/* Additional Features */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-4">
          More About Us
        </h3>
        <p
          className={`text-gray-600 text-center leading-relaxed mb-6 ${
            isDarkMode ? "text-white" : ""
          }`}
        >
          Discover how FoodieBite brings the best meals to your doorstep. We aim
          to satisfy your cravings with a wide variety of dishes, exclusive
          offers, and personalized services.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">Wide Selection</h4>
            <p className="text-gray-600 mt-2">
              Choose from a variety of cuisines and restaurants near you.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">Fast Delivery</h4>
            <p className="text-gray-600 mt-2">
              Get your food delivered fresh and on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">Exclusive Deals</h4>
            <p className="text-gray-600 mt-2">
              Enjoy exclusive offers and discounts only on FoodieBite.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy, FAQ, About Us, and Help Line Section */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8 text-center">
        <h3 className="text-2xl font-bold text-orange-500 mb-4">
          Learn More About Us
        </h3>
        <p className="text-gray-600 mb-6">
          Explore our FAQs, company story, or reach out for assistance.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => handleNavigation("/faq")}
            className="text-orange-500 font-bold hover:underline text-lg"
          >
            FAQs
          </button>
          <button
            onClick={() => handleNavigation("/about-us")}
            className="text-orange-500 font-bold hover:underline text-lg"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavigation("/privacy-policy")}
            className="text-orange-500 font-bold hover:underline text-lg"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleNavigation("/help-line")}
            className="text-orange-500 font-bold hover:underline text-lg"
          >
            Help Line
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
