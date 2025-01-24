"use client";
import React, { FormEvent, useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import GoogleGemini from "@/components/GoogleGemini";


function page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
   <main className="min-h-screen">
    <div className="relative min-h-screen bg-gray-900  h-full ">
      {/* Meteor Card */}
      <div className="relative flex items-center justify-center min-h-screen w-full top-0 left-0  h-full z-0">
        <div className="relative max-w-md w-full ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[1.05] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
              Contact Us
            </h1>

            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
              We&apos;re here to help with any questions about our courses,
              programs, or events. Reach out and let us know how we can assist
              you in your musical journey.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
            {/* Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
      
    </div>

    <div className="min-h-screen">
      <GoogleGemini/>
    </div>
   </main>


    
  );
}

export default page;
