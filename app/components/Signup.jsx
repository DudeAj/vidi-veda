import React from "react";
import Button from "../ui/Button";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex-1 bg-gray-50 p-10 flex flex-col justify-center items-center">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-orange-500">ANFRA</h1>
          </div>
          <p className="text-gray-600 text-center mb-6">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.
          </p>
          <img
            src="https://undraw.co/api/illustrations/random"
            alt="Illustration"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Sign up Now
          </h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Terms and Register Button */}
            <div className="text-sm text-gray-600">
              By clicking here and continuing, I agree to the{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Privacy Policy
              </a>
              .
            </div>

            <Button>Register Account</Button>
          </form>

          {/* Login Link */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Log in now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
