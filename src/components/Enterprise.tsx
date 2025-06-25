"use client";
import { BentoGrid } from "@/components/ui/bento-grid";
import { GridBackground } from "@/components/ui/GridBackground";

const itemsSample = [
  {
    title: "Analytics Dashboard",
    meta: "v2.4.1",
    description:
      "Real-time metrics with AI-powered insights and predictive analytics",
    icon: <span className="w-4 h-4 text-blue-500">📈</span>,
    status: "Live",
    tags: ["Statistics", "Reports", "AI"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    icon: <span className="w-4 h-4 text-emerald-500">✅</span>,
    status: "Updated",
    tags: ["Productivity", "Automation"],
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    icon: <span className="w-4 h-4 text-purple-500">🎬</span>,
    tags: ["Storage", "CDN"],
    colSpan: 2,
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    icon: <span className="w-4 h-4 text-sky-500">🌐</span>,
    status: "Beta",
    tags: ["Infrastructure", "Edge"],
  },
];

export default function Enterprise() {
  return (
    <div className="dark">
      <GridBackground className="bg-black">
        <BentoGrid items={itemsSample} />
        <section className="w-full flex flex-col items-center justify-center"></section>
      </GridBackground>
    </div>
  );
}