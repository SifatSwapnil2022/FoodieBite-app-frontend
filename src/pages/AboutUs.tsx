import team from "../assets/team.jpg"; // Add a relevant helpline image

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to FoodieBite! We are dedicated to bringing delicious meals to
        your doorstep with speed and reliability. Since our launch in 2022, we
        have delivered over 10 million meals and partnered with hundreds of
        restaurants nationwide.
      </p>

      <div className="my-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To make great food accessible to everyone and enhance the joy of
          dining with family and friends.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Journey</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>2022: FoodieBite launched with 50 partner restaurants.</li>
          <li>2023: Expanded to 20 cities and introduced a mobile app.</li>
          <li>2024: Achieved 10 million orders milestone.</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-700">
          Our passionate team consists of food enthusiasts, tech wizards, and
          dedicated support staff who work tirelessly to ensure every bite
          matters.
        </p>
      </div>

      <div className="my-8">
        <img
          src={team}
          alt="Our Team at FoodieBite"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
