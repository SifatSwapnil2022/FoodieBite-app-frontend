import privacyBannerImage from "../assets/privacy.jpg"; // Add a relevant privacy banner image

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Banner Section */}
      <div className="w-full max-w-4xl mb-8">
        <img
          src={privacyBannerImage}
          alt="Privacy Policy Banner"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-orange-500 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
          At FoodieBite.com, we value your privacy and are committed to
          protecting your personal information. This policy outlines how we
          collect, use, and safeguard your data.
        </p>

        {/* Policy Sections */}
        <div className="flex flex-col gap-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Your name, email address, phone number, and payment details.
              </li>
              <li>
                Order history and preferences for personalized experiences.
              </li>
              <li>Device information like IP address and geolocation.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>To process orders and provide customer support.</li>
              <li>To improve our app and user experience.</li>
              <li>To comply with legal obligations and secure your data.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, correct, or delete your personal
              data. Contact us at{" "}
              <span className="text-orange-500 font-bold">
                privacy@foodiebite.com
              </span>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h3>
        <p className="text-lg text-gray-600">
          For questions about our privacy policy or your data, please reach out
          to us at{" "}
          <span className="text-orange-500 font-bold">
            support@foodiebite.com
          </span>{" "}
          or call us at{" "}
          <span className="text-orange-500 font-bold">1-800-FOODIE</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
