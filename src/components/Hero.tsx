"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { DotBackground } from "@/components/ui/dot-background";

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-1"
  >
    <path
      d="M1 11L11 1M11 1H1M11 1V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function FlickerLight() {
  return (
    <span
      className="inline-block w-3 h-3 rounded-full mr-2"
      style={{
        background: "radial-gradient(circle, #e0e0e0 60%, #b0b0b0 100%)",
        boxShadow: "0 0 6px 2px #b0b0ff, 0 0 12px 4px #b0b0ff",
        animation: "pulse-light 2s infinite"
      }}
    />
  );
}

function HeroAnnouncementTab() {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex items-center px-5 py-2 rounded-full bg-[#181824] shadow-[0_0_16px_4px_rgba(176,176,255,0.4)] border border-[#b0b0ff]/30">
        <FlickerLight />
        <span className="text-base font-montreal text-[#e0e0e0] tracking-wide">
        Built by founders, for founders.
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <DotBackground>
      <section
        tabIndex={-1}
        className="relative min-h-screen text-white flex flex-col items-center justify-center p-8 overflow-hidden"
      >
        {/* Header (Navbar) */}
        <header className="absolute top-0 left-0 right-0 px-8 py-4 flex items-center justify-between z-10 w-full font-montreal">
          {/* Logo */}
          <div className="flex items-center" style={{ minWidth: 90 }}>
            <Image
              src="/9M-Logo.svg"
              alt="9M Logo"
              width={60}
              height={36}
              priority
            />
          </div>
          {/* Centered Tabs */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-16">
            <a
              href="#enterprise"
              className="text-white text-xl hover:opacity-80 transition font-montreal font-normal"
            >
              Enterprise
            </a>
            <a
              href="#products"
              className="text-white text-xl hover:opacity-80 transition font-montreal font-normal"
            >
              Products
            </a>
            <a
              href="#careers"
              className="text-white font-normal text-xl hover:opacity-80 transition font-montreal"
            >
              Careers
            </a>
          </nav>
          {/* Contact Us Button */}
          <div
            className="flex items-center ml-auto"
            style={{ minWidth: 120, justifyContent: "flex-end" }}
          >
            <a
              href="mailto:contact@9m.com"
              className="group flex items-center gap-2 px-8 py-2 font-montreal font-normal rounded-md bg-gradient-to-b from-gray-200 to-gray-400 text-black font-medium border border-gray-500 shadow-[0_4px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:from-gray-100 hover:to-gray-300 transition-all min-w-[120px] justify-center font-montreal"
            >
              <Mail size={20} className="-ml-1" />
              Contact Us
            </a>
          </div>
        </header>

        {/* Announcement Tab */}
        <HeroAnnouncementTab />

        {/* Main content */}
        <div className="z-10 text-center max-w-4xl flex flex-col items-center pb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montreal mb-6 leading-tight animate-slide-up soft-underglow">
            We're not an agency. We're a team{' '}
            <span>
              <span className="font-editorial italic">
                that ships.
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl font-montreal animate-slide-up" style={{ color: '#FFF7D6' }}>
            Software ventures built with{' '}
            <span className="font-editorial italic">design</span>,{' '}
            <span className="font-editorial italic">automation</span>, and{' '}
            <span className="font-editorial italic">speed</span>.
          </p>
          <button className="group bg-gradient-to-b from-gray-200 to-gray-400 text-black font-medium py-3 px-6 rounded-lg border border-gray-500 shadow-[0_4px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:from-gray-100 hover:to-gray-300 transition-all flex items-center gap-2 mt-2 font-montreal font-normal btn-pulse">
            Book a Demo
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1 ml-2"
            />
          </button>
        </div>
      </section>
    </DotBackground>
  );
}
