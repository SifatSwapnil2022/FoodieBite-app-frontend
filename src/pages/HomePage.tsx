import { useState, useEffect } from "react";
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import socialMediaImage from "../assets/socialMedia.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import burgerology50 from "../assets/burgerology50.jpg";
import buy1get1 from "../assets/buy1get1.jpg";
import free from "../assets/free.jpg";
import kebab from "../assets/kebab.jpg";
import pizza from "../assets/pizza.jpg";
import sandwitch from "../assets/sandwitch.jpg";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import dp from "../assets/dp.png";
import sd from "../assets/sd.jpg";
import to from "../assets/to.jpg";
import bk from "../assets/bk.png";
import ph from "../assets/ph.jpg";
import bv from "../assets/bv.png";
import kb from "../assets/kb.jpg";
import kh from "../assets/kh.jpg";
import ne from "../assets/ne.jpg";

// Sample Data for Advertisements
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";

// Sample data for offers and advertisements

// Sample Data for Offers
const offers = [
  {
    id: 1,
    title: "50% Off on All Orders",
    description: "Get 50% off your next order. Use code: FOODIE50",
    image: burgerology50,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "Enjoy a free meal with every order. Limited time only!",
    image: buy1get1,
  },
  {
    id: 3,
    title: "Free Delivery for First-Time Users",
    description: "New to FoodieBite? Get free delivery on your first order.",
    image: free,
  },
  {
    id: 4,
    title: "Special Deal: 30% Off on Burgers",
    description:
      "Satisfy your cravings with our juicy burgers. Use code: BURGER30",
    image: bk,
  },
  {
    id: 5,
    title: "10% Off on Orders Above 100 tk",
    description: "Get 10% off on orders above $100. Use code: FOODIE10",
    image: ph,
  },

  {
    id: 6,
    title: "Special Deal: 20% Off on Set-Menu",
    description: "Indulge in our delicious pizzas. Use code: BengaliVOJ20",
    image: bv,
  },

  {
    id: 7,
    title: "10% Off on Orders Above 600 tk",
    description: "Get 10% off on orders above 600tk. Use code: Kachi10",
    image: kb,
  },

  {
    id: 8,
    title: "Special Deal: 20% Off on Kebabs",
    description:
      "Satisfy your cravings with our juicy kebabs. Use code: Kebab20",
    image: kh,
  },

  {
    id: 9,
    title: "10% Off for valentine's day",
    description: "Get 10% off on orders above $100. Use code: valentine10",
    image: ne,
  },
];

// Sample Data for Featured Menu Items
const featuredMenuItems = [
  {
    id: 1,
    name: "Spicy Kebab Roll",
    description: "Fresh kebab rolls with a spicy kick.",
    image: kebab, // Place in public/assets folder
  },
  {
    id: 2,
    name: "Cheesy Veggie Pizza",
    description: "A cheesy, veggie-packed pizza perfect for every taste.",
    image: pizza,
  },
  {
    id: 3,
    name: "Grilled Chicken Sandwich",
    description: "Juicy grilled chicken in a soft, toasted bun.",
    image: sandwitch,
  },
];

// Sample Data for Best Reviewers
const reviewers = [
  {
    id: 1,
    name: "Arun Joyti Mondol",
    reviewCount: 20,
    avatar: user1, // Place in public/assets folder
  },
  {
    id: 2,
    name: "Md Sakib Khan",
    reviewCount: 5,
    avatar: user2,
  },
  {
    id: 3,
    name: "Nuzath Tabassum",
    reviewCount: 8,
    avatar: user3,
  },
];

// Sample Data for Top-Rated Restaurants
const topRestaurants = [
  {
    id: 1,
    name: "Dominos Pizza",
    rating: 4.9,
    image: dp, // Place in public/assets folder
  },
  {
    id: 2,
    name: "Sultan's Dine",
    rating: 4.8,
    image: sd,
  },
  {
    id: 3,
    name: "Takeout ",
    rating: 4.7,
    image: to,
  },
];
// Sample Data for Customer Testimonials
const testimonials = [
  {
    id: 1,
    name: "Urmi Chowdhury",
    review:
      "Poor delivery service. Food arrived late and was not fresh at all 😡!",
    avatar: user4, // Place in public/assets folder
  },
  {
    id: 2,
    name: "Bijoy Dipto Pal",
    review:
      "I love the quick delivery and variety of food options.😍 Highly recommend!",
    avatar: user5,
  },
  {
    id: 3,
    name: "Niloy Rahman",
    review:
      "FoodieBite makes ordering dinner a breeze. The app is fantastic😊!",
    avatar: user6,
  },
];

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
      className={clsx(
        "flex flex-col gap-16 min-h-screen py-12",
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      )}
    >
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={toggleDarkMode}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-all ease-in-out duration-300"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <div
        className={clsx(
          "md:px-32 bg-white rounded-xl shadow-lg py-10 px-8 flex flex-col gap-6 text-center mx-6",
          isDarkMode && "bg-gray-800 text-white"
        )}
      >
        <h1
          className={clsx(
            "text-6xl font-bold tracking-tight drop-shadow-sm",
            isDarkMode ? "text-orange-500" : "text-orange-500"
          )}
        >
          Every Bite Matters with FoodieBite
        </h1>
        <p
          className={clsx(
            "text-lg text-gray-700 leading-relaxed",
            isDarkMode ? "text-white" : "text-gray-700"
          )}
        >
          Your favorite meals delivered fresh and fast! Explore a world of
          flavors with just a click.
        </p>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Restaurant Offers Section */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">
          Restaurant Offers
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">{offer.title}</h4>
              <p className="text-gray-600 mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Menu Items Section */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">
          Featured Menu New Exclusive Items
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredMenuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Reviewers Section */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">
          Best Reviewers
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {reviewers.map((reviewer) => (
            <div
              key={reviewer.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={reviewer.avatar}
                alt={reviewer.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">
                {reviewer.name}
              </h4>
              <p className="text-gray-600 mt-2">
                {reviewer.reviewCount} reviews
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">
          What Our Customers Are Saying
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top-Rated Restaurants Section */}
      <div className="bg-gray-100 rounded-xl shadow-lg py-8 px-10 mx-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">
          Top-Rated Restaurants
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {topRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">
                {restaurant.name}
              </h4>
              <p className="text-gray-600 mt-2">
                Rating: {restaurant.rating} ⭐
              </p>
            </div>
          ))}
        </div>
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
            className={clsx(
              "font-bold text-4xl tracking-tight",
              isDarkMode ? "text-white" : "text-gray-800"
            )}
          >
            Order Takeaway Even Faster!
          </h2>
          <p
            className={clsx(
              "text-lg leading-relaxed",
              isDarkMode ? "text-white" : "text-gray-600"
            )}
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

      {/* Blog Section */}
      <div className="bg-gray-100 rounded-xl shadow-lg py-8 px-10 mx-8">
        <div className="flex flex-col gap-16 min-h-screen py-12">
          {/* Sample Blog Post 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">
              The Secret to Perfect Takeaway
            </h4>
            <p className="text-gray-600 mt-2">
              Discover the best practices for ordering takeaway and making sure
              it arrives fresh and hot!
            </p>
            <button
              onClick={() => handleNavigation("/blog/1")}
              className="text-orange-500 font-bold mt-4 hover:underline"
            >
              Read More
            </button>
          </div>
          {/* Promotional Banner */}
          <div className="bg-orange-500 rounded-lg shadow-lg text-orange-500 text-white py-6 px-8 text-center">
            <h4 className="text-2xl font-bold mb-4">
              Get Exclusive Discounts!
            </h4>
            <p className="text-lg mb-4">
              Sign up for our newsletter and get exclusive discounts and
              promotions.
            </p>
            <button
              onClick={() => handleNavigation("/subscribe")}
              className="bg-white text-orange-800 px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
            >
              Subscribe Now
            </button>
          </div>

          {/* Sample Blog Post 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800">
              How FoodieBite is Changing Food Delivery
            </h4>
            <p className="text-gray-600 mt-2">
              Learn about the innovative features of the FoodieBite app and how
              we’re transforming the food delivery experience.
            </p>
            <button
              onClick={() => handleNavigation("/blog/2")}
              className="text-orange-500 font-bold mt-4 hover:underline"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Privacy Policy, FAQ, About Us, and Help Line Section */}
      <div className="bg-white rounded-xl shadow-lg py-8 px-10 mx-8 text-center">
        <h3 className="text-4xl font-bold text-orange-500 mb-4">
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
