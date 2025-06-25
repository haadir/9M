"use client";
import { GridBackground } from "@/components/ui/GridBackground";

export default function Enterprise() {
  return (
    <GridBackground className="bg-[#18181b]">
      <section className="offers flex flex-col items-center justify-center min-h-[700px] py-20 bg-[#18181b]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
          {/* Spline 3D Scene on the left */}
          <div className="flex-shrink-0 w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
            <iframe 
              src="https://my.spline.design/genkubgreetingrobot-TqupydZpQq6aa7OlCIdozmXJ/" 
              width="100%" 
              height="100%" 
              style={{ border: 'none', borderRadius: '24px', background: 'transparent' }}
              title="3D Spline Scene"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          {/* Info Card on the right */}
          <div className="flex-1 min-h-[340px] rounded-[48px] bg-[#222] text-white flex items-center px-14 py-12 transition-all duration-300 shadow-[0_0_32px_0_rgba(120,120,255,0.15)] hover:shadow-[0_0_64px_8px_rgba(120,120,255,0.35)] relative group">
            {/* Underglow effect */}
            <div className="absolute -inset-2 rounded-[56px] blur-2xl opacity-60 pointer-events-none z-0 group-hover:opacity-90 transition-all duration-300" style={{background: "radial-gradient(ellipse at 60% 60%, rgba(120,120,255,0.25) 0%, transparent 80%)"}} />
            <div className="relative z-10 w-full">
              <h2 className="text-4xl md:text-5xl font-montreal mb-4">Artificial Intelligence & AI Agents</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                We build and deploy advanced AI agents for enterprise automation, customer support, and business intelligence. Our solutions leverage the latest in generative AI, LLMs, and custom agent frameworks to deliver real value for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
}