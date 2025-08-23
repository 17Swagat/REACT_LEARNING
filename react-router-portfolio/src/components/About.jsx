import React from "react";
import illustration from '../assets/images/reshot-illustration-technology-company.png';

export default function About() {
  return (
    <section
      className="relative px-6 py-20 md:px-12 lg:px-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      style={{ fontFamily: "'Protest Guerrilla', sans-serif" }}
    >
      {/* Load Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            About Us
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We’re not just building another app — we’re crafting a vision of the
            future. Our mission is to merge technology and creativity to give
            you a seamless, lightning-fast, and visually stunning experience.
          </p>
          <p className="text-gray-400 text-md leading-relaxed">
            From our futuristic UI to our AI-driven features, every detail is
            designed to empower and inspire you. We believe the future isn’t
            coming — it’s already here, and you’re part of it.
          </p>
        </div>

        {/* Right: Image / Illustration */}
        <div className="relative flex justify-center h-[50vh] sm:h-[80vh]">
          <div className="relative w-full">
            <img
              // src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80"
              src={illustration}
              alt="Futuristic Concept"
              className="rounded-2xl h-[80%] w-full shadow-lg shadow-purple-500/40 hover:scale-105 transition-transform"
            />
            {/* Neon Glow Border */}
            {/* <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/40 animate-pulse"></div> */}
          </div>
        </div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}
