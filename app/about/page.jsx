"use client";

import React from "react";
import { Info, Users, Globe } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AboutPage() {
  return (
    <div className={`${poppins.className} p-8`}>
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">About Us</h1>
      <p className="text-gray-700 max-w-3xl mx-auto text-center mb-10">
        Welcome to HomeServiceHub! We provide top-notch home services ranging from plumbing, electrical work, cleaning, and carpentry. Our goal is to make your life easier by connecting you with trusted professionals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center gap-4 bg-white">
          <Info size={28} className="text-primary" />
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">Deliver fast and reliable home services at your doorstep.</p>
        </div>

        <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center gap-4 bg-white">
          <Users size={28} className="text-primary" />
          <h2 className="text-xl font-semibold">Our Team</h2>
          <p className="text-gray-600">Skilled professionals with experience and dedication.</p>
        </div>

        <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center gap-4 bg-white">
          <Globe size={28} className="text-primary" />
          <h2 className="text-xl font-semibold">Global Reach</h2>
          <p className="text-gray-600">Connecting services across multiple cities efficiently.</p>
        </div>
      </div>
    </div>
  );
}
