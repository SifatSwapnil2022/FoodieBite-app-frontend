import helplineImage from "../assets/helpline.jpg"; // Add a relevant helpline image

const HelpLine = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      {/* Banner Image */}
      <div className="w-full max-w-4xl mb-8">
        <img
          src={helplineImage}
          alt="Customer Support"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-orange-500 text-center mb-6">
          We’re Here to Help!
        </h1>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
          Got questions or need assistance with your orders? Our customer
          support team is ready to assist you. Reach out to us through any of
          the options below!
        </p>

        {/* Helpline Details */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                📞 Call Us Anytime
              </h2>
              <p className="text-lg text-gray-600">
                Our 24/7 helpline:{" "}
                <span className="font-bold text-orange-500">1-800-FOODIE</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                💬 Chat Support
              </h2>
              <p className="text-lg text-gray-600">
                Use our in-app chat to get instant support for your queries.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">📧 Email Us</h2>
              <p className="text-lg text-gray-600">
                Send us an email at:{" "}
                <span className="font-bold text-orange-500">
                  support@foodiebite.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <span className="font-bold">How do I track my order?</span> - You
            can track your order from the "Order Status" page in your profile.
          </li>
          <li>
            <span className="font-bold">What if my order is late?</span> - Call
            us or chat with our support team for assistance.
          </li>
          <li>
            <span className="font-bold">Can I change my order?</span> - Yes,
            changes are possible before confirmation. Contact support for help.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpLine;
