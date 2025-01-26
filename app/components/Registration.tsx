"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Registration() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left mb-8 flex flex-col items-center">
          <p className="text-orange-500 text-xl font-medium mb-2">
            Registration
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Register Yourself on <span className="text-orange-500">Vidi</span>
            Veda
          </h2>
          <p className="text-lg text-gray-600">
            Personalized solutions for students, tutors, and parents! Choose
            your role and fill out the necessary details to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section with Image */}
          <div className=" w-full flex justify-center mb-8 md:mb-0">
            <img
              src="/img/hero_bg.webp" // Replace with your actual image URL
              alt="Registration Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section with Form */}
          <div className="w-full">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Role
                </label>
                <select className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="parent">Parent</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Queries
                </label>
                <textarea
                  placeholder="Write your queries here"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Sign Up Now!
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowContact(!showContact)}
            className="text-blue-600 font-medium hover:underline focus:outline-none"
          >
            {showContact ? "Hide Contact Us" : "Need Help? Contact Us"}
          </button>
        </div>

        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 w-full max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-center mb-4">
              Contact Us
            </h3>
            <form className="w-full space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message here"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
