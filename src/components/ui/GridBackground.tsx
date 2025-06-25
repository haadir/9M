import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full min-h-[20rem] bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
} 