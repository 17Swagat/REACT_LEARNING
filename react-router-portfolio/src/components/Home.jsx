import React from "react";
import { ArrowRight } from "lucide-react"; // For futuristic icons

export default function Home() {
  return (
    <div
      className="bg-black min-h-screen text-white"
      style={{ fontFamily: "'Protest Guerrilla', sans-serif" }}
    >
      {/* Load Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Welcome to the Future
        </h1>
        <p className="text-lg md:text-xl text-gray-50 max-w-2xl">
          Experience a next-gen interface built for speed, beauty, and power.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-950 to-cyan-900 text-lg hover:opacity-90 transition flex items-center gap-2">
          Get Started <ArrowRight size={20} />
        </button>
        {/* Futuristic glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-10 md:px-14 lg:px-25 bg-gradient-to-b from-black to-gray-900">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Lightning Fast",
              desc: "Optimized for speed, ensuring instant load times.",
              icon: "⚡",
            },
            {
              title: "Futuristic Design",
              desc: "Bold, clean, and ahead of its time.",
              icon: "🚀",
            },
            {
              title: "Seamless Experience",
              desc: "Enjoy a smooth and intuitive user journey.",
              icon: "🌌",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 py-15 rounded-2xl bg-gray-800 hover:bg-gray-700 transition shadow-lg hover:shadow-purple-500/40"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="px-6 py-30 text-center bg-gradient-to-r from-purple-700 to-cyan-500">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Be Part of the Revolution
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Join our community and shape the future together.
        </p>
        <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition flex items-center gap-2 mx-auto">
          Join Now <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
}
