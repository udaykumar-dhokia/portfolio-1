import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

const Contact = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            title="map"
            style={
              theme === 1
                ? { filter: "grayscale(1) contrast(1.2) opacity(0.4)" }
                : {}
            }
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Ahmedabad+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div
            className={`lg:w-1/3 md:w-1/2 ${
              theme === 1 ? "bg-black" : "bg-white"
            } rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md`}
          >
            <h2
              className={`${
                theme === 1 ? "text-white" : "text-black"
              } text-lg mb-1 font-medium title-font`}
            >
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus-visible:ring-0 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus-visible:ring-0 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <Button
              className={`${
                theme === 1 ? "text-black bg-white" : "text-white"
              } rounded-full border-0 py-2 px-6 focus:outline-none text-lg hover:-translate-y-1 hover:-translate-x-1 transform transition-all`}
            >
              Submit
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
