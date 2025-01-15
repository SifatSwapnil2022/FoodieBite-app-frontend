// FAQPage Component
import { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "Orders",
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "To place an order, simply search for your favorite meal, add it to the cart, and proceed to checkout.",
        },
        {
          question: "Can I cancel my order?",
          answer:
            "Yes, you can cancel your order within 10 minutes of placing it from the order status page.",
        },
      ],
    },
    {
      category: "Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, UPI, and mobile wallets.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use encrypted protocols to ensure your payment data is secure.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="rounded-lg shadow-md bg-gray-50 p-4"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              {category.category}
            </h2>
            {category.questions.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full text-left font-medium text-gray-800 hover:text-orange-500 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQPage;
