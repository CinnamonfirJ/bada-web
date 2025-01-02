"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I create an account on the app?",
    answer:
      "Creating an account is simple. Download our app, click on 'Sign Up', and follow the step-by-step instructions to set up your profile.",
  },
  {
    question: "Can I sell products directly through the app?",
    answer:
      "Yes, you can list and sell products through our platform once your account is verified. We provide all the necessary tools to manage your listings and transactions.",
  },
  {
    question: "Is my personal information secure on the app?",
    answer:
      "We implement industry-standard security measures to protect your data. All personal information is encrypted and stored securely on our servers.",
  },
  {
    question: "How do I connect with other users?",
    answer:
      "You can connect with other users through our social features, including direct messaging, following, and community forums.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='w-full'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-bold text-primary mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-gray-400 mb-8'>
            We have taken out time to respond to some of your questions
          </p>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-28 w-full'>
          <div className='space-y-4 w-full max-w-md'>
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className='w-full flex items-center justify-between py-4 text-left'
                >
                  <span className='text-[#585858] hover:text-[#00B2FF] transition-colors'>
                    {faq.question}
                  </span>
                  <div className='flex justify-center items-center bg-primary rounded-full w-10 h-10'>
                    <Plus
                      className={`w-6 h-6 text-white transition-transform ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div className='pb-4 text-gray-400'>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-center items-center bg-[#CACACA] rounded-lg py-6 px-12 text-center'>
            <Image
              src='/assets/profile-pic.png'
              alt='Support representative'
              width={80}
              height={80}
              className='mx-auto rounded-full mb-4'
            />
            <h3 className='text-xl font-semibold text-primary mb-4'>
              Want to reach out to us directly?
            </h3>
            <button className='flex px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors'>
              Book a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
