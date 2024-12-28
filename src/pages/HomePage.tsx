import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import socialMediaImage from "../assets/socialMedia.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 bg-gray-50 min-h-screen py-10">
      <div className="bg-white rounded-lg shadow-md py-8 px-6 flex flex-col gap-5 text-center -mt-16 mx-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-orange-600">
          Every Bite Matters with FoodieBite
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Your favorite meals delivered fresh and fast! Explore a world of
          flavors with just a click.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center px-6">
        <img
          src={landingImage}
          alt="Delicious Food on a Plate"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="font-bold text-3xl tracking-tight text-gray-800">
            Order Takeaway Even Faster!
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Download the FoodieBite App for quick orders, personalized
            recommendations, and exclusive offers.
          </p>
          <img
            src={appDownloadImage}
            alt="App Download Button"
            className="w-40 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src={socialMediaImage}
            alt="Follow us on Social Media"
            className="w-40 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
