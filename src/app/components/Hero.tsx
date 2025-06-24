"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

const GRID_SIZE = 40; // px
const FADE_DURATION = 800; // ms for the trail to fade
const HOVER_GRAY = "#888888"; // The color for hover and trail

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

function getGridDimensions(width: number, height: number) {
  return {
    cols: Math.ceil(width / GRID_SIZE),
    rows: Math.ceil(height / GRID_SIZE),
  };
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [trail, setTrail] = useState<Map<string, number>>(new Map());
  const [now, setNow] = useState(Date.now());

  // Animation loop to update current time for smooth fading
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setNow(Date.now());
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Update grid dimensions on resize
  useEffect(() => {
    function updateDimensions() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { cols, rows } = getGridDimensions(dimensions.width, dimensions.height);

  function handlePointerMove(e: React.PointerEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const col = Math.floor(x / GRID_SIZE);
    const row = Math.floor(y / GRID_SIZE);

    if (col >= 0 && row >= 0 && col < cols && row < rows) {
      const key = `${col},${row}`;
      setTrail((prev) => {
        const next = new Map(prev);
        next.set(key, Date.now()); // Add/update the square

        // Clean up old entries from the trail
        for (const [k, ts] of next.entries()) {
          if (Date.now() - ts > FADE_DURATION) {
            next.delete(k);
          } else {
            // Since Map iterates in insertion order, we can stop early
            break;
          }
        }
        return next;
      });
    }
  }

  // Fade mask for the grid
  const maskStyle = {
    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
  };

  return (
    <section
      tabIndex={-1}
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Interactive Grid */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full z-0"
        style={maskStyle}
        onPointerMove={handlePointerMove}
      >
        {Array.from({ length: rows }).map((_, row) => (
          <div
            key={row}
            className="absolute left-0 w-full"
            style={{ top: row * GRID_SIZE, height: 1 }}
          >
            <div
              className="w-full h-px"
              style={{ background: "#fff2", opacity: 1 }}
            />
          </div>
        ))}
        {Array.from({ length: cols }).map((_, col) => (
          <div
            key={col}
            className="absolute top-0 h-full"
            style={{ left: col * GRID_SIZE, width: 1 }}
          >
            <div
              className="h-full w-px"
              style={{ background: "#fff2", opacity: 1 }}
            />
          </div>
        ))}
        {/* Fading trail */}
        {Array.from(trail.entries()).map(([key, timestamp]) => {
          const [col, row] = key.split(",").map(Number);
          const age = now - timestamp;
          const opacity = Math.max(0, 1 - age / FADE_DURATION);

          if (opacity <= 0) return null;

          return (
            <div
              key={key}
              className="absolute rounded pointer-events-none"
              style={{
                left: col * GRID_SIZE,
                top: row * GRID_SIZE,
                width: GRID_SIZE,
                height: GRID_SIZE,
                background: HOVER_GRAY,
                opacity: opacity * 0.7,
                boxShadow: `0 0 16px 8px ${HOVER_GRAY}${Math.round(
                  opacity * 0x88
                )
                  .toString(16)
                  .padStart(2, "0")}`,
              }}
            />
          );
        })}
      </div>

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
            href="#products"
            className="text-white font-normal text-2xl hover:opacity-80 transition font-montreal"
          >
            Products
          </a>
          <a
            href="#careers"
            className="text-white font-normal text-2xl hover:opacity-80 transition font-montreal"
          >
            Careers
          </a>
          <a
            href="#partner"
            className="text-white font-normal text-2xl hover:opacity-80 transition font-montreal"
          >
            Partner
          </a>
        </nav>
        {/* Contact Us Button */}
        <div
          className="flex items-center ml-auto"
          style={{ minWidth: 120, justifyContent: "flex-end" }}
        >
          <a
            href="mailto:contact@9m.com"
            className="group flex items-center gap-2 px-8 py-2 rounded-md bg-gradient-to-b from-gray-200 to-gray-400 text-black font-medium border border-gray-500 shadow-[0_4px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:from-gray-100 hover:to-gray-300 transition-all min-w-[120px] justify-center font-montreal"
          >
            <Mail size={20} className="-ml-1" />
            Contact Us
          </a>
        </div>
      </header>

      {/* Main content */}
      <div className="z-10 text-center max-w-4xl flex flex-col items-center pb-20">
        <h1 className="text-5xl md:text-7xl font-montreal mb-6 leading-tight">
          Focused on building
          <br />
          <span>
            and{" "}
            <span className="font-editorial italic">
              scaling digital ventures.
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl font-montreal">
          We operate as a small, cross-functional team focused on shipping
          high-impact products with{" "}
          <span className="text-gray-100 font-editorial italic">
            clear execution
          </span>{" "}
          and{" "}
          <span className="text-gray-100 font-editorial italic">
            long-term potential.
          </span>
        </p>
        <button className="group bg-gradient-to-b from-gray-200 to-gray-400 text-black font-medium py-3 px-6 rounded-lg border border-gray-500 shadow-[0_4px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:from-gray-100 hover:to-gray-300 transition-all flex items-center gap-2">
          Book a Demo{" "}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}
